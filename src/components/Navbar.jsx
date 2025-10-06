import InputSearch from './ui/InputSearch';
import {
  IconNav1,
  IconNav2,
  IconNav3,
  IconNav4,
  IconNav5,
  IconNav6,
  IconNav7,
} from './iconsAsSvg';

export default function Navbar() {
  const icons = [
    IconNav1,
    IconNav2,
    IconNav3,
    IconNav4,
    IconNav5,
    IconNav6,
    IconNav7,
  ];

  return (
    <div className="bg-white rounded-[20px] mt-[10px] ml-[10px] h-[60px] flex items-center justify-between px-4">
      <InputSearch />

      <div className="flex items-center gap-2">
        {icons.map((Icon, index) => (
          <div key={index} className="cursor-pointer">
            <Icon />
          </div>
        ))}

        <div className="w-[44px] h-[44px] rounded-full bg-[#00579F] flex items-center justify-center">
          <p className="text-white font-medium">N</p>
        </div>
      </div>
    </div>
  );
}
