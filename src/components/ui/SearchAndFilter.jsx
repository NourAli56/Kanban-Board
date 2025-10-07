import { useKanban } from "../../context/KanbanContext";
import { motion, AnimatePresence } from "framer-motion";
import { Close, CloseWhite, Search } from "../iconsAsSvg";
import Input from "./Input";

export default function SearchAndFilter() {
  const {
    searchTerm,
    filterStatus,
    setSearch,
    setStatusFilter,
    clearFilters,
    getFilteredTasksCount,
    getTotalTasksCount,
    isFilterActive,
    columns
  } = useKanban();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleClearFilters = () => {
    clearFilters();
  };

  return (
    <div className="w-[97%] mx-auto bg-white dark:bg-gray-800 rounded-lg  border border-gray-200 dark:border-gray-700 p-3 mb-2">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="flex-1 w-full mt-1.5">
          <div className="relative">
            <Input
              placeholder="ابحث في المهام..."
              value={searchTerm}
              onChange={handleSearchChange}
              iconLeft={<Search />}
              className='pr-8'
              iconRight={
                searchTerm ? (
                  <Close onClick={() => setSearch("")} className="text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 transition-colors ml-6" />
                ) : null
              }
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Close />
              </button>
            )}
          </div>
        </div>

        <div className="w-full lg:w-64">
          <select
            value={filterStatus}
            onChange={handleStatusChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="all">جميع الحالات</option>
            {Object.values(columns).map(column => (
              <option key={column.id} value={column.id}>
                {column.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <AnimatePresence>
            {isFilterActive() && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  {getFilteredTasksCount()} من {getTotalTasksCount()} مهمة
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isFilterActive() && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleClearFilters}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <CloseWhite />
                مسح الفلاتر
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isFilterActive() && getFilteredTasksCount() === 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-center"
          >
            <p className="text-yellow-800 dark:text-yellow-200">
              لم يتم العثور على مهام تطابق معايير البحث والتصفية
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}