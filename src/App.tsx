import { useState } from "react";
import { BackgroundCard } from "./components/BackgroundCard";
import { Header } from "./components/Header";

function App() {
  const [background, setBackground] = useState<string>('bg-[#101010]');

  const backgrounds = [
    { label: "Background 1", className: "bg-gradient-to-r from-blue-500 to-pink-500" },
    { label: "Background 2", className: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { label: "Background 3", className: "bg-gradient-to-r from-green-500 to-pink-500" },
    { label: "Background 4", className: "bg-gradient-to-r from-yellow-500 to-pink-500" },
    { label: "Background 5", className: "bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" },
    { label: "Background 6", className: "relative h-full w-full bg-white [background:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" },
  ];


  const resetBackground = () => {
    setBackground('bg-[#101010]');
  };

  const handlePreview = (styles: string) => {
    setBackground(styles);
  };

  return (
    <div className={`${background} min-h-screen`}>
      <div className="max-w-6xl mx-auto flex flex-col gap-10 text-white">
        <Header resetBackground={resetBackground} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {backgrounds.map(({ className }, index) => (
            <BackgroundCard key={index} styles={className} onPreview={handlePreview} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;