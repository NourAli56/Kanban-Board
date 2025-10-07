import KanbanBoard from "../components/kanban/KanbanBoard";
import { KanbanProvider } from "../context/KanbanContext";


export default function KanbanPage() {
    return <KanbanProvider><KanbanBoard /></KanbanProvider>;
}
