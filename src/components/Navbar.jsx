import InputSearch from './ui/InputSearch';
import {
  IconNav1,
  IconNav2,
  IconNav3,
  IconNav4,
  IconNav5,
  IconNav6,
} from './iconsAsSvg';
import ThemeToggle from './ui/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();
  const icons = [IconNav1, IconNav2, IconNav3, IconNav4, IconNav5, IconNav6];

  return (
    <div className="flex items-center justify-between px-4 mt-2 ml-2 h-[60px] 
                    rounded-[20px] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm">
      <InputSearch />
      <ThemeToggle />
      <div className="flex items-center gap-2">
        {icons.map((Icon, index) => (
          <div key={index} className="cursor-pointer">
            <Icon color={theme === "dark" ? "#ffffff" : "#000000"} />
          </div>
        ))}

        <div className="w-[44px] h-[44px] rounded-full bg-[#00579F] flex items-center justify-center">
          <p className="text-white font-medium">N</p>
        </div>
      </div>
    </div>
  );
}
