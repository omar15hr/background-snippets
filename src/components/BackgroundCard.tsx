import { useState } from "react";

interface BackgroundCardProps {
  styles: string;
  onPreview: (styles: string) => void;
}

export function BackgroundCard({ styles, onPreview }: BackgroundCardProps) {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<div className="${styles}"></div>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreview = () => {
    onPreview(styles);
  };

  const buttonStyles = `bg-[#101010] text-white rounded-lg hover:bg-[#222222] cursor-pointer p-2 text-xs`

  return (
    <div className={`flex fle-row h-50 w-full rounded-lg ${styles}`}>
      <div className='flex flex-row justify-start items-start p-2 gap-2'>
      <button
        onClick={handleCopy}
        className={buttonStyles}
      >
        {copied ? "Copied!" : "Copy Code"}
      </button>
      <button
        onClick={handlePreview}
        className={buttonStyles}
      >
        Preview
      </button>
    </div>
    </div>
  );
}
