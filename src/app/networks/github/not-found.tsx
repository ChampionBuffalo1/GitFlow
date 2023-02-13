'use client';
import { useSearchParams } from 'next/navigation';

export default function PageNotFound() {
  const params = useSearchParams();
  return (
    <>
      <pre>No github user with username "{params.get('username')}" was found </pre>
    </>
  );
}
