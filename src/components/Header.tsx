

export function Header() {
  return (
    <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <div className="mb-8 flex"></div>
              <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
                Collection of{" "}
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  background snippets
                </span>
              </h2>
              <p className="mt-6 text-center text-xl leading-6 text-gray-600 dark:text-gray-200">
                Ready-to-use, simply copy and paste into your next project. All
                snippets crafted with Tailwind CSS.
              </p>
              <div className="mt-10 flex gap-4"></div>
            </div>
          </div>
  );
}

// <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
  //                   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
  //                   <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
  //                     New snippets ⚡️
  //                     <span className="inline-flex items-center pl-2 text-black dark:text-white">
  //                       Read more{' '}
                        
  //                     </span>
  //                   </div>
  //                 </span>