'use client';
import { SWRConfig } from 'swr';
import { ChildrenProps } from '@/utils/types';

type fetchParams = Parameters<typeof fetch>;

// https://swr.vercel.app/docs/api#options
const swrOptions = {
  fetcher: (resources: Array<fetchParams[0]>, init?: fetchParams[1]) =>
    Promise.allSettled(resources.map(resource => fetch(resource, init).then(r => r.json())))
};

export default function SwrProvider({ children }: ChildrenProps) {
  return <SWRConfig value={swrOptions}>{children}</SWRConfig>;
}
