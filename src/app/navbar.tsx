import Link from 'next/link';

export default function NavBar() {
  return (
    // bg-blend-darken -> bg-grey-600 ??
    <header className="fixed flex justify-between w-full px-3 py-2 text-white bg-gray-600 ">
      <span className="text-2xl">
        <Link href="/">GitFlow</Link>
      </span>
      <span className="flex w-1/6 justify-evenly">
        <Link href="/about">About</Link>
        <Link href="https://github.com/ChampionBuffalo1/Gitwork" prefetch={false}>
          Github
        </Link>
      </span>
    </header>
  );
}
