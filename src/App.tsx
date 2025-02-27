import { useState } from "react";

type Background = {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
};

function App() {
  const [background, setBackground] = useState<Background>({
    backgroundColor: "#101010",
    backgroundImage: "none",
  });

  const SNIPPETS: Background[] = [
    
    { backgroundImage: "linear-gradient(150deg, #0093E9 30%, #80D0C7 78%)" },
    { backgroundImage: "linear-gradient(to right, #1E1F23, #E1E2E3)" },
    { backgroundImage: "linear-gradient(to right, #101010, #7877c6)" },
    { backgroundImage: "radial-gradient(circle, #7877c6, #f5f5f5)" },
    { backgroundImage: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(35,35,74,1) 35%, rgba(89,131,146,1) 100%)" },
    { backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)" },
    { backgroundImage: 'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)' },
    { backgroundImage: 'linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)' },
  ];

  const applyBackground = (snippet: Background) => {
    setBackground({
      backgroundColor: snippet.backgroundColor || "transparent",
      backgroundImage: snippet.backgroundImage || "none",
      backgroundSize: snippet.backgroundSize || "auto",
    });
  };

  const resetBackground = () => {
    setBackground({ backgroundColor: "#101010", backgroundImage: "none" });
  };

  const copyToClipboard = (snippet: Background) => {
    let styleString = `background-color: ${snippet.backgroundColor || "transparent"};\n`;
    if (snippet.backgroundImage) styleString += `background-image: ${snippet.backgroundImage};\n`;
    if (snippet.backgroundSize) styleString += `background-size: ${snippet.backgroundSize};\n`;

    navigator.clipboard.writeText(styleString);
  };

  return (
    <div style={background}>
      <div className="max-w-6xl mx-auto flex flex-col gap-10 text-white">
        <div className="max-w-3xl flex flex-col items-center justify-center mt-10 mb-10 mx-auto">
          <h1 className="text-4xl md:text-7xl sm:text-2xl mt-10 text-center p-2">
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

        <div className="flex flex-wrap gap-4 mt-10 mx-auto items-center justify-center mb-10">
          {SNIPPETS.map((snippet, index) => (
            <div key={index} className="w-85 h-70 md:w-65 sm:h-70 rounded-lg" style={snippet}>
              <div className="flex flex-row gap-2 p-2">
                <button onClick={() => applyBackground(snippet)} className="bg-[#0F172A] p-2 rounded-md text-xs cursor-pointer">
                  preview
                </button>
                <button onClick={() => copyToClipboard(snippet)} className="bg-[#0F172A] p-2 rounded-md text-xs cursor-pointer">
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