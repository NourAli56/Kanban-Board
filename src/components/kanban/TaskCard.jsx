import { useState } from "react";
import { useKanban } from "../../context/KanbanContext";
import { motion, AnimatePresence } from "framer-motion";
import DropdownMenu from "../ui/DropdownMenu";
import EditTask from "./EditTask";

export default function TaskCard({ task, columnId }) {
  const { deleteTask, editTask } = useKanban();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);

  const handleSave = () => {
    editTask(columnId, task.id, { title, description: desc });
    setEditMode(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-700 p-2 rounded-[10px] border border-[#EBEEF3] mb-2 relative"
    >
      <AnimatePresence mode="wait">
        {editMode ? (
          <EditTask title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} handleSave={handleSave} setEditMode={setEditMode} />
        ) : (
          <motion.div
            key="view-mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-[#374555] dark:text-white">
                  {task.title}
                </h4>
                <p className="text-sm text-[#8198AF] dark:text-gray-300">
                  {task.description}
                </p>
              </div>
              <DropdownMenu
                onEdit={() => setEditMode(true)}
                onDelete={() => deleteTask(columnId, task.id)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
