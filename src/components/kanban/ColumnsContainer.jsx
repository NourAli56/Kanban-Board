import { Droppable } from "@hello-pangea/dnd";
import AddColumnForm from "./AddColumnForm";
import Column from "./Column";


export default function ColumnsContainer({ containerRef, columns }) {
    return (
        <div ref={containerRef} className="overflow-x-auto">
            <div className="flex gap-4 h-[56vh] p-4 min-w-full">
                {Object.values(columns).map((col) => (
                    <Droppable key={col.id} droppableId={col.id}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`min-h-[200px] min-w-[240px] flex-shrink-0 
                       ${snapshot.isDraggingOver ? "bg-blue-50 dark:bg-blue-900" : ""}`}
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