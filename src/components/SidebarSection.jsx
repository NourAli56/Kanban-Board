import SidebarItem from "./SidebarItem";

export default function SidebarSection({ title, items }) {
  return (
    <div className="">
      {title && (
        <div className="flex items-center justify-between mt-3">
          <div className="w-full h-[1px] bg-[#E5E7EB] w-[25.5%]"></div>
          <p className="text-[#62748E] whitespace-nowrap">{title}</p>
          <div className="w-full h-[1px] bg-[#E5E7EB] w-[25.5%]"></div>
        </div>
      )}
      <div className={title ?  "mt-1":"mt-0"}>
        {items.map((item, idx) => (
          <SidebarItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
