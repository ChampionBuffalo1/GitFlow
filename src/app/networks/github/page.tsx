'use client';
import 'reactflow/dist/style.css';
import { notFound } from 'next/navigation';
import useSWRImmutable from 'swr/immutable';
import FetchError from './components/fetchError';
import RFSkeleton from './components/flowSkeleton';
import { memo, useEffect, useMemo, useState } from 'react';
import { GhFound, GhNotFound, GhRL, SlugType } from '@/utils/types';

const BaseURL = 'https://api.github.com/users/';

function GitNetwork({ searchParams }: Pick<SlugType, 'searchParams'>) {
  const [rateLimit, setRateLimit] = useState<number>(60);
  const { data, error, isLoading } = useSWRImmutable<swrResp>([
    BaseURL + searchParams?.username,
    BaseURL + searchParams?.username + '/followers'
  ]);
  useEffect(() => {
    fetch('https://api.github.com/rate_limit')
      .then<GhRL>(r => r.json())
      .then(json => setRateLimit(json.rate.remaining));
  });
  const nodes = useMemo(() => getNodes(data), [data]);

  if (error) return <FetchError swrError={error} />;
  if (isLoading) return <RFSkeleton />;

  return (
    <>
      <p>Remaining Rate Limits: {rateLimit}</p>
      <pre className="text-md">{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
export default memo(GitNetwork);

function getNodes(data?: swrResp) {
  if (!data) return [];

  const [userData, followerData] = data;
  if (userData.status === 'fulfilled' && followerData.status === 'fulfilled') {
    if (userData.value.message) notFound();
  }
}
type swrResp = PromiseSettledResult<GhFound & GhNotFound>[];
