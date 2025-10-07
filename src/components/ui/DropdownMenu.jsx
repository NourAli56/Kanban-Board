import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotsHorizontal } from "../iconsAsSvg";

export default function DropdownMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef} dir="rtl">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-300"
      >
        <DotsHorizontal  />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-6 bg-white dark:bg-gray-800 shadow-md rounded-md border border-gray-200 dark:border-gray-600 w-[110px] z-10"
          >
            <button
              onClick={() => {
                onEdit?.();
                setOpen(false);
              }}
              className="block w-full text-right px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-[#4D637C]"
            >
              تعديل
            </button>
            <button
              onClick={() => {
                onDelete?.();
                setOpen(false);
              }}
              className="block w-full text-right px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
            >
              حذف
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
