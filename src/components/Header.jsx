import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <header className="dark:bg-gray-950 bg-white border-b dark:border-gray-900 border-gray-200 text-white p-4 shadow-md w-full flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Grid Generator
      </h1>
      <button
        className="dark:text-white cursor-pointer text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-200 p-2 rounded-md"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
      >
        {mode === "dark" ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};

export default Header;
