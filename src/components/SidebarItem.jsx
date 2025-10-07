import { ArrowDownIcon } from "./iconsAsSvg";

export default function SidebarItem({ icon: Icon, label, hasArrow = true }) {
  const isEmpOrder = label === "طلبات التوظيف";

  return (
    <div
      className={`flex items-center justify-between mt-1 cursor-pointer p-2 rounded-lg transition
        ${isEmpOrder ? "bg-[#00579F]" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
    >
      <div className="flex items-center gap-2">
        <Icon color={isEmpOrder ? "#ffffff" : "#62748E"} />
        <p className={`${isEmpOrder ? "text-white" : "text-gray-700 dark:text-gray-300"}`}>
          {label}
        </p>
      </div>
      {hasArrow && (
        <ArrowDownIcon color={isEmpOrder ? "#ffffff" : "#62748E"} />
      )}
    </div>
  );
}
