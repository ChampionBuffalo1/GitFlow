import { ChildrenProps } from '@/utils/types';

export default function Layout({ children }: ChildrenProps) {
  return <div className="w-full h-screen">{children}</div>;
}
