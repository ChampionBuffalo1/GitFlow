import '../styles/globals.css';
import NavBar from './navbar';
import { Roboto } from '@next/font/google';
import { ChildrenProps } from '@/utils/types';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className={roboto.className}>
      <head />
      <body className="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
