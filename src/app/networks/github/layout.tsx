import { ChildrenProps } from '@/utils/types';

export default function Layout({ children }: ChildrenProps) {
  return <div className="w-full h-screen overflow-hidden">{children}</div>;
}
