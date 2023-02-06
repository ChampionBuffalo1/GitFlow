import type { ReactNode } from 'react';
export type ChildrenProps = { children: ReactNode };

export type SlugType = {
  // key is the slug name i.e., for app/[id]/page.tsx it will be `id` key
  params: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
