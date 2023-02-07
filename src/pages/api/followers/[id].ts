// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import LRUCache from 'lru-cache';
import getData from './fetcher';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CacheType } from './types';

const ghCache = new LRUCache<string, CacheType>({
  max: 200,
  ttl: 1000 * 60 * 60 // 1 hr
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<CacheType>) {
  const id = req.query.id as string;
  let data = ghCache.get(id);
  if (data) return res.status(200).send(data);
  data = await getData(id);
  ghCache.set(id, data);
  res.status(200).send(data);
}
