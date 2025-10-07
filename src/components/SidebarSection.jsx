import SidebarItem from "./SidebarItem";

export default function SidebarSection({ title, items }) {
  return (
    <div className="">
      {title && (
        <div className="flex items-center justify-between mt-3">
          <div className="w-[25.5%] h-[1px] bg-gray-200 dark:bg-gray-700"></div>
          <p className="text-gray-500 dark:text-gray-400 whitespace-nowrap">{title}</p>
          <div className="w-[25.5%] h-[1px] bg-gray-200 dark:bg-gray-700"></div>
        </div>
      )}
      <div className={title ? "mt-1" : "mt-0"}>
        {items.map((item, idx) => (
          <SidebarItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
