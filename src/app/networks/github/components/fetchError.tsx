export default function FetchError({ swrError }: propsType) {
  return (
    <div>
      <p>Fetch Error occurred!</p>
      <pre>{JSON.stringify(swrError, null, 2)}</pre>
    </div>
  );
}

type propsType = { swrError: string };
