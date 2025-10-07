import { useTheme } from "../../context/ThemeContext";


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <p className="hidden md:flex" >{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}</p>
      <p className="md:hidden flex" >{theme === "light" ? "🌙 " : "☀️"}</p>
    </button>
  );
}
