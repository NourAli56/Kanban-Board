import ExportButton from "../ui/ExportButton";
import { motion, AnimatePresence } from "framer-motion";
import SearchAndFilter from "../ui/SearchAndFilter";


export default function Toolbar({ isFilterActive, getFilteredTasksCount, getTotalTasksCount }) {
    return (
        <>
            <div className="flex justify-between items-center mb-2 mt-3 px-3">
                <div>
                    <h1 className="text-xl font-[500] text-[#535862] dark:text-white">طلبات التوظيف</h1>
                    <AnimatePresence>
                        {isFilterActive() && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-sm text-gray-600 dark:text-gray-400 mt-1"
                            >
                                عرض {getFilteredTasksCount()} من {getTotalTasksCount()} مهمة
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <ExportButton />
            </div>
            <SearchAndFilter />
        </>
    );
}