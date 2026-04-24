import Column from "./Column";
import { DndContext, closestCenter } from "@dnd-kit/core";

export default function Board({ tasks, setTasks, search, showToast }) {

  const columns = [
    { title: "To Do", status: "todo" },
    { title: "In Progress", status: "progress" },
    { title: "Done", status: "done" },
  ];

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    setTasks(prev =>
      prev.map(task =>
        task.id === active.id
          ? { ...task, status: over.id }
          : task
      )
    );
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="board">
        {columns.map(col => (
          <Column
             key={col.status}
             {...col}
             tasks={tasks}
             setTasks={setTasks}
             search={search}
             showToast={showToast}
            />
        ))}
      </div>
    </DndContext>
  );
}