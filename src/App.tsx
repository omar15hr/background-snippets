import { useState } from "react";

function App() {
  const [background, setBackground] = useState("#7877c6");

  const SNIPPETS = [
    { background: "#7877c6" },
    { background: "#f5f5f5" },
    { background: "#1E1F23" },
    { background: "#E1E2E3" },
    { background: "#101010" },
  ];

  const applyBackground = (background: string) => {
    setBackground(background);
  };

  const resetBackground = () => {
    setBackground("#101010");
  };

  const copyToClipboard = (background: string) => {
    navigator.clipboard.writeText(background);
  };

  return (
    <div style={{ backgroundColor: background }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-10 text-white" >
      <div className="max-w-3xl flex flex-col items-center justify-center mt-10 mb-10 mx-auto">
        <h1 className="text-4xl md:text-7xl sm:text-2xl mt-10 text-center">
          Collection of modern, background snippets
        </h1>
        <p className="text-lg md:text-xl sm:text-lg mt-6 p-3 text-center">
          Ready-to-use, simply copy and paste into your next project. All
          snippets crafted with Tailwind CSS and Vanilla CSS for easy
          integration.
        </p>
        <div className="mt-10 flex flex-row gap-5">
          <button className="bg-[#E1E2E3] text-black p-2 rounded-lg w-36 cursor-pointer">
            Go to Github
          </button>
          <button onClick={resetBackground} className="bg-[#1E1F23] text-white p-2 rounded-lg w-40 cursor-pointer">
            Reset background
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-10 mx-auto items-center justify-center">
        {SNIPPETS.map(({ background }, index) => (
          <div key={index} className="w-85 h-70 md:w-65 sm:h-70 rounded-lg border border-[#000]" style={{ backgroundColor: background }}>
            <div className="flex flex-row gap-2 p-2">
              <button onClick={() => applyBackground(background)} className="bg-[#0F172A] p-2 rounded-md text-xs cursor-pointer">
                preview
              </button>
              <button onClick={() => copyToClipboard(background)} className="bg-[#0F172A] p-2 rounded-md text-xs cursor-pointer">
                copy code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
