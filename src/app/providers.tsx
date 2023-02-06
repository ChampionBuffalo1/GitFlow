'use client';
import { ThemeProvider } from 'next-themes';
import { ChildrenProps } from '@/utils/types';

// TODO: Toggle Dark Mode using `next-themes` in a separate branch
export default function Providers({ children }: ChildrenProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </>
  );
}
