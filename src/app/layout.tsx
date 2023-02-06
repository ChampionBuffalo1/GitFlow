import { ChildrenProps } from '@/utils/types';
import '../styles/globals.css';
import Providers from './providers';

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
