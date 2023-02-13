import { ChildrenProps } from '@/utils/types';
import SwrProvider from './swrProvider';

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="w-full h-screen mt-12 overflow-hidden">
      <SwrProvider>{children}</SwrProvider>;
    </div>
  );
}
