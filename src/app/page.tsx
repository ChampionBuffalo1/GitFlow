import Image from 'next/image';

export default function Home() {
  return (
    <div id="full-window" className="bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center ">
      <form action="/networks/github" method="GET">
        <Image
          src="https://avatars.githubusercontent.com/u/49675578?v=4"
          alt="Github logo"
          width={80}
          height={60}
          className="rounded-full relative float-left mx-4 w-auto h-auto"
        />
        <label htmlFor="username" className="text-gray-100 text-2xl block m-5 font-medium">
          Enter your username
        </label>
        <br />
        <input
          type="text"
          className="bg-slate-600 text-gray-100 rounded m-3 p-5"
          name="username"
          placeholder="Github username"
          required
          minLength={3}
        />
        <br />
        <input
          type="submit"
          value="Search"
          className="text-gray-100 bg-blue-500 hover:bg-blue-700 rounded-full text-lg py-2 px-6 my-4 relative float-right"
        />
      </form>
    </div>
  );
}
