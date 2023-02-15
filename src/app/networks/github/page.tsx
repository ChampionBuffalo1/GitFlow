'use client';
import { GhFound, GhNotFound, GhRL, GhUserFollowers, SlugType } from '@/utils/types';
import { notFound } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import 'reactflow/dist/style.css';
import useSWRImmutable from 'swr/immutable';
import RFSkeleton from './components/flowSkeleton';
import SwrError from './components/swrError';

const BaseURL = 'https://api.github.com/users/';

function GitNetwork({ searchParams }: Pick<SlugType, 'searchParams'>) {
  const url = BaseURL + searchParams?.username;
  const [rateLimit, setRateLimit] = useState<number>(60);

  const { data: users, error: userSwrError } = useSWRImmutable<fetchResp>(url, fetcher);
  const { data: followers, error: followerSwrError } = useSWRImmutable<GhUserFollowers>(
    () => (users?.followers! > 0 ? url + '/followers' : undefined),
    fetcher
  );

  useEffect(() => {
    fetch('https://api.github.com/rate_limit')
      .then<GhRL>(r => r.json())
      .then(json => setRateLimit(json.resources.core.remaining));
  });

  if (users?.message) notFound();

  if (userSwrError || followerSwrError) return <SwrError error={userSwrError || followerSwrError} />;
  if (!users) return <RFSkeleton />;

  const [userInfo, followersInfo] = transform(users, followers);

  return (
    <div>
      <p>Remaining Rate Limits: {rateLimit}</p>
      <pre className="text-md">{JSON.stringify(userInfo, undefined, 2)}</pre>
      <pre className="text-md">{JSON.stringify(followersInfo, undefined, 2)}</pre>
    </div>
  );
}
export default memo(GitNetwork);

const transform = (userInfo: fetchResp, followersInfo?: GhUserFollowers): [fetchResp, GhUserFollowers] => [
  {
    id: userInfo.id,
    login: userInfo.login,
    followers: userInfo.followers
  },
  followersInfo
    ? followersInfo.map(follower => ({
        id: follower.id,
        login: follower.login
      }))
    : []
];

const fetcher = (resource: fetchParams[0], init: fetchParams[1]) => fetch(resource, init).then(r => r.json());

type fetchResp = GhFound & GhNotFound;
type fetchParams = Parameters<typeof fetch>;
