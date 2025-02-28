export function Footer() {
  return (
    <footer>
      <div className="inline-flex max-w-2xl rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-900 dark:border-neutral-900 dark:bg-black dark:text-neutral-200">
        {`These backgrounds are made for a full page background. The preview
              can be different from the actual result. Click on preview to test
              it. And don't forget to tweak it to your needs.`}
      </div>
      <div className="flex items-center justify-center py-8">
        <span className="text-sm text-neutral-800 dark:text-neutral-200">
          Made by
          <a
            href="https://twitter.com/Ibelick"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-neutral-950 dark:text-neutral-100"
          >
            @Ibelick
          </a>
        </span>
      </div>
    </footer>
  );
}
