export default function RateLimitInfo({ remaining }: { remaining: number }) {
  return (
    <div>
      <p>RateLimit Remaining: {remaining}</p>
    </div>
  );
}
