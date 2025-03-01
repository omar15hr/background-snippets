import { useState } from "react";
import { BackgroundCard } from "./components/BackgroundCard";
import { Header } from "./components/Header";
import { Toaster } from "sonner";
import { Footer } from "./components/Footer";

function App() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const resetBackground = () => {
    setPreview(null);
    setTheme("light");
  };

  return (
    <>
      <Toaster />
      <div className={`${theme}`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>

        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <Header resetBackground={resetBackground} />
          <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
            <BackgroundCard setPreview={setPreview} setTheme={setTheme} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
