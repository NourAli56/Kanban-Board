import { useTheme } from '../../context/ThemeContext';
import { SearchIcon } from '../iconsAsSvg';

export default function InputSearch() {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center rounded-[10px] border px-2 py-[4px]
                    bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700`}>
      <input
        className="bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-2 py-1"
        placeholder="بحث"
      />
      <div className="py-1 px-2 cursor-pointer">
        <SearchIcon color={theme === "dark" ? "#ffffff" : "#000000"} />
      </div>
    </div>
  );
}
