import { ArrowDownIcon } from "./iconsAsSvg";

export default function SidebarItem({ icon: Icon, label, hasArrow = true }) {
    const isEmpOrder = label === "طلبات التوظيف";
    const bgColor = isEmpOrder ? "#00579F" : "transparent";
    const textColor = isEmpOrder ? "#FFFFFF" : "#62748E";
    return (
        <div className={`flex items-center justify-between mt-1 cursor-pointer p-2 rounded-lg transition 
        ${isEmpOrder ? "bg-[#00579F]" : "hover:bg-gray-50"} `}>
            <div className="flex items-center gap-2">
                <Icon color='#ffffff' />
                <p style={{ color: textColor }}>{label}</p>
            </div>
            {hasArrow && <ArrowDownIcon color={isEmpOrder ? '#ffffff':""}  />}
        </div>
    );
}
