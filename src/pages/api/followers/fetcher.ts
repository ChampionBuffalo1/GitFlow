import { CacheType, Followers } from './types';

const BaseUrl = 'https://api.github.com/users/';

export default async function getData(id: string): Promise<CacheType> {
  const url = BaseUrl + id;
  const resObj = {} as CacheType;

  const [user, followers] = await Promise.allSettled([
    fetch(url).then(r => r.json()),
    fetch(url + '/followers').then(r => r.json())
  ]);
  if (user.status === 'fulfilled') {
    resObj['id'] = user.value.id;
    resObj['avatarUrl'] = user.value['avatar_url'];
  }

  if (followers.status === 'fulfilled') {
    resObj['followers'] = followers.value.map((follower: Followers) => ({
      id: follower.id,
      username: follower.login,
      avatarUrl: follower.avatar_url
    }));
  }
  return resObj;
}
