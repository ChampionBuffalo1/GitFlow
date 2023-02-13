'use client';
import { useSearchParams } from 'next/navigation';

export default function PageNotFound() {
  const params = useSearchParams();
  return (
    <div>
      <pre>No github user with username &quot;{params.get('username')}&quot; was found </pre>
    </div>
  );
}
