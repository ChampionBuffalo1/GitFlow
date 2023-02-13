'use client';
import { useSearchParams } from 'next/navigation';

export default function head() {
  const searchParams = useSearchParams();
  return (
    <>
      <title>{`Viewing ${searchParams.get('username')}'s Gitwork`}</title>
    </>
  );
}
