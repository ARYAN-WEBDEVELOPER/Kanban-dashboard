import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({ task, tasks, setTasks, showToast }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const [priority, setPriority] = useState(task.priority);

  // ❌ Delete
 const deleteTask = () => {
  setTasks(tasks.filter(t => t.id !== task.id));
  showToast("❌ Task Deleted");
};

  // 💾 Save Edit (NO NEW OBJECT ISSUE)
  const saveEdit = () => {
  if (!text.trim()) return;

  setTasks(tasks.map(t =>
    t.id === task.id
      ? { ...t, text, priority }
      : t
  ));

  showToast("✏️ Task Updated");
  setEditing(false);
};

  const getColor = () => {
    if (task.priority === "high") return "#ff4d4f";
    if (task.priority === "medium") return "#faad14";
    return "#52c41a";
  };

  return (
    <div ref={setNodeRef} className="task" style={style}>

      {/* DRAG HANDLE */}
      <div
        {...listeners}
        {...attributes}
        style={{ cursor: "grab", fontSize: "12px", opacity: 0.6 }}
      >
        ⠿ drag
      </div>

      {/* PRIORITY BAR */}
      <div
        className="priority-bar"
        style={{ background: getColor() }}
      ></div>

      {/* 🧠 EDIT MODE */}
      {editing ? (
        <>
          <input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <div className="controls">
            <button onClick={saveEdit}>💾 Save</button>
            <button onClick={() => setEditing(false)}>❌ Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p>{task.text}</p>

          <div className="controls">
            <button onClick={deleteTask}>❌</button>

            <span className="badge" style={{ background: getColor() }}>
              {task.priority}
            </span>

            {/* ✅ NEW EDIT BUTTON */}
            <button onClick={() => setEditing(true)}>✏️</button>
          </div>
        </>
      )}
    </div>
  );
}