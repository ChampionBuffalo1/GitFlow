'use client';
import { ThemeProvider } from 'next-themes';

// TODO: Toggle Dark Mode using `next-themes` in a separate branch
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </>
  );
}
