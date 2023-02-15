import Link from 'next/link';

export default function NavBar() {
  return (
    // bg-blend-darken -> bg-grey-600 ??
    <header className="fixed top-0 w-full">
      <nav className="flex justify-between px-3 py-2 text-gray-100 bg-gray-700">
        <span className="text-2xl">
          <Link href="/">GitFlow</Link>
        </span>
        <span className="px-2 space-x-4 text-xl lg:space-x-12 lg:px-12">
          <Link href="/about">About</Link>
          <Link href="https://github.com/ChampionBuffalo1/Gitwork" prefetch={false} target={'_blank'}>
            Github
          </Link>
        </span>
      </nav>
    </header>
  );
}
