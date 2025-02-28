import { BACKGROUND_OPTIONS } from "./Background";
import Playground from "./Playground";

interface BackgroundCardProps {
  setPreview: (preview: React.ReactNode) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export function BackgroundCard({ setPreview, setTheme }: BackgroundCardProps) {

  return (
    <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                  <Playground
                    key={index}
                    setPreview={setPreview}
                    theme={background.theme}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </Playground>
                );
              })}
            </div>
  );
}
