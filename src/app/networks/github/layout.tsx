import { ChildrenProps } from '@/utils/types';
import SwrProvider from './swrProvider';

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <SwrProvider>{children}</SwrProvider>;
    </div>
  );
}
