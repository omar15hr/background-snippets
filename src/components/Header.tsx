export function Header() {
  return (
    <div className="pt-8">
      <div className="relative mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
          <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            Background Snippets
          </span>
        </h2>
        <p className="mt-6 text-center text-xl leading-6 text-gray-600 dark:text-gray-200">
          Ready-to-use, just copy and paste. All snippets crafted with Tailwind
          CSS.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/omar15hr/background-snippets"
            target="_blank"
            className="bg-[#2E2E2E] text-white p-2 flex justify-center items-center rounded-full w-40 hover:opacity-90"
          >
            Go to Github
          </a>
          <button className="bg-[#dddbdb] p-2 rounded-full w-40 cursor-pointer hover:opacity-90">
            Reset background
          </button>
        </div>
      </div>
    </div>
  );
}
