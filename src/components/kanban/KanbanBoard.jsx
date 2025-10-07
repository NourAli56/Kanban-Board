import { useRef } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useKanban } from "../../context/KanbanContext";
import Toolbar from "./Toolbar";
import ColumnsContainer from "./ColumnsContainer";
import useAutoScroll from "../../hooks/useAutoScroll";


export default function KanbanBoard() {
  const { columns, moveTask, isFilterActive, getFilteredTasksCount, getTotalTasksCount } = useKanban();


  const containerRef = useRef(null);
  const { startAutoScroll, stopAutoScroll } = useAutoScroll(containerRef, {
    edge: 120,
    maxSpeed: 30,
  });


  const onDragStart = () => startAutoScroll();


  const onDragEnd = (result) => {
    stopAutoScroll();


    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;


    moveTask(source.droppableId, destination.droppableId, draggableId, destination.index);
  };


  return (
    <div>
      <Toolbar
        isFilterActive={isFilterActive}
        getFilteredTasksCount={getFilteredTasksCount}
        getTotalTasksCount={getTotalTasksCount}
      />


      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <ColumnsContainer containerRef={containerRef} columns={columns} />
      </DragDropContext>
    </div>
  );
}