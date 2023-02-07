import { ChildrenProps } from '@/utils/types';
import '../styles/globals.css';
import Provider from './providers';

export default function RootLayout({ children }: ChildrenProps) {
  return (
    // TODO: Use `next-themes` to toggle dark mode
    <html lang="en" className="dark">
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
