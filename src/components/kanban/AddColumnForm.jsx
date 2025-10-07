import React, { useState } from "react";
import { useKanban } from "../../context/KanbanContext";
import { motion } from "framer-motion";
import Input from "../ui/Input";

export default function AddColumnForm() {
  const { addColumn } = useKanban();
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addColumn(title);
      setTitle("");
      setIsAdding(false);
    }
  };

  return (
    <motion.div
      layout
      className="min-w-[250px]"
    >
      {isAdding ? (
        <motion.form
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-2 rounded"
        >
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="اسم العمود الجديد"
            className="mb-2"
            autoFocus
          />
          <div className="flex gap-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-3 py-1 rounded flex-1"
            >
              إضافة
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setIsAdding(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-500 text-white px-3 py-1 rounded flex-1"
            >
              إلغاء
            </motion.button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          onClick={() => setIsAdding(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg transition-colors"
        >
          + إضافة عمود
        </motion.button>
      )}
    </motion.div>
  );
}