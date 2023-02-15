export default function SwrError({ error }: propsType) {
  return (
    <div>
      <p>Fetch Error occurred!</p>
      <pre>{JSON.stringify(error, undefined, 2)}</pre>
    </div>
  );
}

type propsType = { error: string };
