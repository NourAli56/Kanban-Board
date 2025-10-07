import { Droppable } from "@hello-pangea/dnd";
import AddColumnForm from "./AddColumnForm";
import Column from "./Column";


export default function ColumnsContainer({ containerRef, columns }) {
    return (
        <div className="overflow-x-auto" ref={containerRef}>
            <div className="flex gap-4 h-[56vh] p-4  ">
                {Object.values(columns).map((col) => (
                    <Droppable key={col.id} droppableId={col.id}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`min-h-[200px] ${snapshot.isDraggingOver ? "bg-blue-50 dark:bg-blue-900" : ""} min-w-[240px]`}
                            >
                                <Column column={col} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
                <AddColumnForm />
            </div>
        </div>
    );
}