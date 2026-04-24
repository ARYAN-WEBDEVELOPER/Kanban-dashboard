import { useState } from "react";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

export default function Column({ title, status, tasks, setTasks, search, showToast }) {

  const { setNodeRef } = useDroppable({ id: status });

  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("low");
  const [showInput, setShowInput] = useState(false);

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        status,
        priority,
      },
    ]);

    showToast("✅ Task Added");

    setInput("");
    setShowInput(false);
  };

  const filteredTasks = tasks.filter(
    t =>
      t.status === status &&
      t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={setNodeRef} className="column">
      <h2>{title}</h2>

      {filteredTasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          showToast={showToast}
        />
      ))}

      {/* 🔥 ADD TASK SECTION (BOTTOM) */}
      {status === "todo" && (
        <div style={{ marginTop: "10px" }}>
          {showInput ? (
            <>
              <input
                className="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task..."
              />

              <select
                className="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
              </select>

              <button className="add-btn" onClick={addTask}>
                Add Task
              </button>

              <button
                style={{ marginTop: "5px", width: "100%" }}
                onClick={() => setShowInput(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="add-btn"
              onClick={() => setShowInput(true)}
            >
              ➕ Add a card
            </button>
          )}
        </div>
      )}
    </div>
  );
}