'use client';
import { notFound } from 'next/navigation';
import type { Edge, Node } from 'reactflow';
import { BaseURL, rlEndpoint } from '@/utils/Constants';
import { memo, useEffect, useMemo, useState } from 'react';
import { Background, Controls, ReactFlow } from 'reactflow';
import { fetchResp, GhRL, GhUserFollowers, SlugType } from '@/utils/types';
import { fetcher, FollowersNotFound, generateNodes, RateLimitError, UserNotFoundError } from './util';
import 'reactflow/dist/style.css';
import useSWRImmutable from 'swr/immutable';
import RFSkeleton from './components/flowSkeleton';
import RateLimitHit from './components/rateLimitHit';
import RateLimitInfo from './components/rateLimitInfo';
import flowAvatarNode from './components/flowAvatarNode';

function GitNetwork({ searchParams }: Pick<SlugType, 'searchParams'>) {
  const url = BaseURL + searchParams?.username;
  const [rateLimit, setRateLimit] = useState<number>(60);
  const [edges, setEdges] = useState<Edge[]>([]);

  const { data: user, error: userSwrError } = useSWRImmutable<fetchResp>(url, fetcher);
  const { data: followers, error: followerSwrError } = useSWRImmutable<GhUserFollowers>(
    () => (user?.followers! > 0 ? url + '/followers' : undefined),
    fetcher
  );

  useEffect(() => {
    fetch(rlEndpoint)
      .then<GhRL>(r => r.json())
      .then(json => setRateLimit(json.resources.core.remaining));
  }, []);

  // Needs to perform this before any conditions otherwise we will get the following error
  // "Rendered more hooks than during the previous render."
  const nodes: Node[] = useMemo(() => generateNodes(user, followers), [followers]);

  if (userSwrError instanceof RateLimitError || followerSwrError instanceof RateLimitError) return <RateLimitHit />;

  if (userSwrError instanceof UserNotFoundError) notFound();
  if (followerSwrError instanceof FollowersNotFound) {
    // Display an error "box" (modal?)
  }
  if (!user) return <RFSkeleton />;

  return (
    <div>
      <RateLimitInfo remaining={rateLimit} />
      <ReactFlow fitView nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Controls />
        <Background className="bg-gray-900" size={2} color="#dbeafe" />
      </ReactFlow>
    </div>
  );
}
export default memo(GitNetwork);

const nodeTypes = {
  avatarNode: flowAvatarNode
};
