import { useEffect, useState } from "react";

type Props = {};

const ThemeSwitchButton = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="self-end px-3 py-1 rounded-md border border-gray-400 text-sm text-gray-950 dark:bg-black dark:text-slate-100"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeSwitchButton;
