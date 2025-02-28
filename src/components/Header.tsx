interface HeaderProps {
  resetBackground: () => void;
}

export function Header({ resetBackground }: HeaderProps) {
  return (
    <div className="max-w-3xl flex flex-col items-center justify-center mt-10 mb-10 mx-auto">
      <h1 className="text-4xl md:text-7xl sm:text-2xl mt-10 text-center p-2">
        Collection of modern, background snippets
      </h1>
      <p className="text-lg md:text-xl sm:text-lg mt-6 p-3 text-center">
        Ready-to-use, simply copy and paste into your next project. All snippets
        work with Tailwind CSS.
      </p>
      <div className="mt-10 flex flex-row gap-5">
        <button className="bg-[#E1E2E3] text-black hover:opacity-90 p-2 rounded-lg w-36 cursor-pointer">
          Go to Github
        </button>
        <button
          onClick={resetBackground}
          className="bg-[#1E1F23] text-white border-2 hover:opacity-90 p-2 rounded-lg w-40 cursor-pointer"
        >
          Reset background
        </button>
      </div>
    </div>
  );
}
