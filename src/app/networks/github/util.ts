import type { Node } from 'reactflow';
import { fetchResp, GhUserFollowers } from '@/utils/types';
type fetchParams = Parameters<typeof fetch>;

export const generateNodes = (userInfo?: fetchResp, followersInfo?: GhUserFollowers): Node[] => {
  if (!userInfo) return [];
  const [user, followers] = transform(userInfo, followersInfo);
  console.debug(user, followers);
  return [];
};

export const fetcher = async (resource: fetchParams[0], init: fetchParams[1]) => {
  const res = await fetch(resource, init);
  if (res.headers.get('x-ratelimit-remaining') === '0') {
    throw new RateLimitError('Rate limit exceeded', {
      cause: 'Github Per hour rate limit exceeded.'
    });
  }
  const json = await res.json();

  if (Object.hasOwn(json, 'message'))
    throw new UserNotFoundError('user not found', {
      cause: json.message
    });

  if (Array.isArray(json) && json.length === 0) {
    throw new FollowersNotFound('No followers found', {
      cause: 'User has no github followers'
    });
  }
  return json;
};

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

class RateLimitError extends Error {
  constructor(message: string, opts: ErrorOptions) {
    super(message, opts);
  }
}

class UserNotFoundError extends Error {
  constructor(message: string, opts: ErrorOptions) {
    super(message, opts);
  }
}

class FollowersNotFound extends Error {
  constructor(message: string, opts: ErrorOptions) {
    super(message, opts);
  }
}

export { FollowersNotFound, UserNotFoundError, RateLimitError };
