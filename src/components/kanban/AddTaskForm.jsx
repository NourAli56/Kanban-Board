import React, { useState } from "react";
import { useKanban } from "../../context/KanbanContext";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

export default function AddTaskForm({ columnId, close }) {
  const { addTask } = useKanban();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (!title) return;
    addTask(columnId, title, desc);
    setTitle("");
    setDesc("");
    close();
  };

  return (
    <div className="p-2 bg-gray-200 dark:bg-gray-600 rounded mb-2">
       <Input
        placeholder="عنوان المهمة"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="الوصف"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="flex items-center gap-2" >
        <button onClick={handleAdd} className="bg-[#00579F] text-white px-3 py-1 rounded mr-1">
          إضافة
        </button>
        <button onClick={close} className="border border-[#8198AF]  text-[#8198AF] px-3 py-1 rounded">
          إلغاء
        </button>
      </div>

    </div>
  );
}
