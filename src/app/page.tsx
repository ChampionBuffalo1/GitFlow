import Image from 'next/image';

export default function Home() {
  return (
    <div id="full-window" className="flex items-center justify-center text-gray-100">
      <form action="/networks/github/" method="GET" className="w-[25rem]">
        <Image
          src="/gh-white.png"
          width={80}
          height={80}
          alt="Github Logo"
          className="relative float-left mx-4 w-80 h-80"
        />
        <label htmlFor="username" className="block m-5 text-2xl font-medium ">
          Enter your username
        </label>
        <br />
        <input
          type="text"
          className="p-5 m-3 rounded-full bg-slate-600 w-[inherit]"
          name="username"
          placeholder="Github username"
          required
        />
        <br />
        <input
          type="submit"
          value="Search"
          className="relative float-right px-6 py-2 my-4 text-lg bg-blue-500 rounded-full hover:bg-blue-700"
        />
      </form>
    </div>
  );
}
