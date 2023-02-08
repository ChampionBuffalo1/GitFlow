'use client';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'next-themes';
import { ChildrenProps } from '@/utils/types';

// https://swr.vercel.app/docs/api#options
const swrOptions = {
  suspense: false,
  refreshInterval: 60 * 1000,
  fetcher: (url: string) => fetch(url).then(res => res.json())
};

export default function Provider({ children }: ChildrenProps) {
  return (
    <>
      <SWRConfig value={swrOptions}>{children}</SWRConfig>
    </>
  );
}

// TODO: Toggle Dark Mode using `next-themes` in a separate branch
export function themeProvider({ children }: ChildrenProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </>
  );
}
