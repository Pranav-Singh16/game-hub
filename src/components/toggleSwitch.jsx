import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isDarkMode } from "../recoil/index";

export default function ThemeToggle() {
  const [isDark, setIsDarkMode] = useRecoilState(isDarkMode);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2 p-4">
        <label className="relative inline-block w-12 h-6">
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDarkMode(e.target.checked)}
            className="opacity-0 w-0 h-0"
          />
          <span
            className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition 
                        ${
                          isDark
                            ? "bg-green-100"
                            : "bg-gray-400 dark:bg-gray-600"
                        }`}
          ></span>
          <span
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition transform dark: bg-green-400 ${
              isDark ? "translate-x-6" : ""
            }`}
          ></span>
        </label>
      </div>
      <div>{isDark ? "Dark " : "Light "} Mode</div>
    </div>
  );
}
