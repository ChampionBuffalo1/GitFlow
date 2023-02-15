'use client';

import { useEffect, useState } from 'react';
import { GhFound, GhNotFound, GhUserFollowers } from '@/utils/types';

const BaseURL = 'https://api.github.com/users/';

export default function useFetchHooks(username: string) {
  const [userInfo, setUserInfo] = useState<GhFound>();
  const [followersInfo, setFollowersInfo] = useState<GhUserFollowers>([]);

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(BaseURL + username)
      .then<fetchResp>(r => {
        if (!r.ok) {
          console.error('User fetch', r.status, r.statusText);
          setError(r.statusText);
        }
        return r.json();
      })
      .then(json => {
        if (json.message) setError('notFound');
        setUserInfo({
          id: json.id,
          login: json.login,
          // follower count
          followers: json.followers
        });
        if (json.followers > 0) {
          fetch(BaseURL + username + '/followers')
            .then<GhUserFollowers>(r => {
              if (!r.ok) {
                console.error('Followers Fetch', r.status, r.statusText);
                setError(r.statusText);
              }
              return r.json();
            })
            .then(json => {
              if (json?.length === 0) {
                setIsLoading(false);
                return;
              }
              setFollowersInfo(
                json.map(follower => ({
                  id: follower.id,
                  login: follower.login
                }))
              );
              setIsLoading(false);
            });
        } else {
          console.debug('hook finished loading...');
          // If user has no followers our loading has finished
          setIsLoading(false);
        }
      });
  }, []);

  return { userInfo, followersInfo, error, isLoading };
}

type fetchResp = GhFound & GhNotFound;
