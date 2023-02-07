export type CacheType = {
  id: number;
  avatarUrl: string;
  followers: Exclude<Followers, 'login' | 'avatar_url'>[];
};

export type Followers = {
  id: number;
  username: string;
  avatarUrl: string;

  login: string;
  avatar_url: string;
};

export type Data = {
  id: string;
  name: string;
};
