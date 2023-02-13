import type { ReactNode } from 'react';
export type ChildrenProps = { children: ReactNode };

export type SlugType = {
  // key is the slug name i.e., for app/[id]/page.tsx it will be `id` key
  params: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export type GhRL = {
  rate: {
    limit: number; // 60 unless we use OAuth
    remaining: number;
    reset: number;
    used: number;
  };
};

export type GhNotFound = {
  message: 'Not Found';
};

export type GhFound = {
  login: string;
  id: number;
  avatar_url: string;
};
