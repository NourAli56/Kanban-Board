import  { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { useKanban } from "../../context/KanbanContext";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";
import {  PlusIcon, Trash } from "lucide-react";

export default function Column({ column }) {
  const { deleteColumn, getTasksForColumn } = useKanban();
  const [showAdd, setShowAdd] = useState(false);
  
  const columnTasks = getTasksForColumn(column);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-[16px] w-[250px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-[#4D637C]">{column.title} ({columnTasks?.length})</h3>
        <button
          onClick={() => deleteColumn(column.id)}
          className="text-red-500 text-sm"
        >
          <Trash size={15} />
        </button>
      </div>

      {columnTasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`mb-2 ${snapshot.isDragging ? 'opacity-50' : ''}`}
            >
              <TaskCard task={task} columnId={column.id} />
            </div>
          )}
        </Draggable>
      ))}

      {showAdd && <AddTaskForm columnId={column.id} close={() => setShowAdd(false)} />}

      <button
        onClick={() => setShowAdd(true)}
        className="mt-2 w-full text-sm bg-transparent text-[#8198AF] py-2 rounded-[10px] border border-dashed border border-[#D1D9E6] flex items-center justify-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <PlusIcon size={15} />
        <p>إضافة مهمة</p>
      </button>
    </div>
  );
}