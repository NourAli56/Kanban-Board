import { useState } from "react";
import { useKanban } from "../../context/KanbanContext";
import { motion, AnimatePresence } from "framer-motion";
import { StatisticIcon } from "../iconsAsSvg";

export default function ExportButton() {
  const { exportToCSV, exportProjectStats, tasks } = useKanban();
  const [isOpen, setIsOpen] = useState(false);

  const handleExportCSV = () => {
    const success = exportToCSV();
    if (success) setIsOpen(false);
  };

  const handleExportStats = () => {
    const success = exportProjectStats();
    if (success) setIsOpen(false);
  };

  const totalTasks = Object.keys(tasks).length;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg
                   text-white dark:text-gray-200 
                   bg-green-600 transition-all duration-150"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="text-sm font-medium">تصدير المهام</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-60 
                       bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-700 
                       rounded-lg shadow-lg z-10 p-3"
          >
            <div className="space-y-2">
              <motion.button
                onClick={handleExportCSV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={totalTasks === 0}
                className="w-full flex items-center justify-between 
                           px-3 py-2 text-sm rounded-md 
                           border border-gray-300 dark:border-gray-600
                           text-gray-700 dark:text-gray-200 
                           bg-gray-50 dark:bg-gray-700 
                           hover:bg-gray-100 dark:hover:bg-gray-600 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all"
              >
                <span>تصدير المهام ({totalTasks})</span>
              </motion.button>

              <motion.button
                onClick={handleExportStats}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={totalTasks === 0}
                className="w-full flex items-center justify-between 
                           px-3 py-2 text-sm rounded-md 
                           border border-gray-300 dark:border-gray-600
                           text-gray-700 dark:text-gray-200 
                           bg-gray-50 dark:bg-gray-700 
                           hover:bg-gray-100 dark:hover:bg-gray-600 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all"
              >
                <span>تصدير الإحصاءات</span>
                <StatisticIcon className="w-4 h-4 text-gray-500 dark:text-gray-300" />
              </motion.button>
            </div>

            {totalTasks === 0 && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                لا توجد مهام للتصدير
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
