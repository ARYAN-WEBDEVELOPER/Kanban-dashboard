import { useState, useEffect } from "react";
import Board from "./components/Board";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 🔥 Toast function
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div>
      <h1>🚀 Kanban Board</h1>

      <input
        className="search"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Board
        tasks={tasks}
        setTasks={setTasks}
        search={search}
        showToast={showToast}
      />

      {/* 🔥 Toast UI */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;