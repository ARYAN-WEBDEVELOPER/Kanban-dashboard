# 🧠 Project Prompt – Kanban Task Board

## 📌 Title

Kanban Task Board (Trello Clone)

---

## 🎯 Objective

Build a task management web application using React.js.
The app should allow users to create, manage, and track tasks using a Kanban-style board.

---

## 🟢 Level 1 – Basic Features

* Create 3 columns:

  * To Do
  * In Progress
  * Done

* Features:

  * Add Task (in To Do)
  * Delete Task
  * Move Task between columns

---

## 🟡 Level 2 – Intermediate Features

* Edit Task (change text)

* Priority System:

  * High → Red
  * Medium → Yellow
  * Low → Green

* Save tasks using localStorage
  (Data should remain after page refresh)

---

## 🔵 Level 3 – Advanced Features

* Drag and Drop (move tasks between columns)
* Search bar to filter tasks
* Clean and responsive UI
* Show popup messages:

  * Task Added
  * Task Deleted
  * Task Updated

---

## 🧠 Data Structure

Each task should follow this format:

```js
{
  id: number,
  text: string,
  status: "todo" | "progress" | "done",
  priority: "low" | "medium" | "high"
}
```

---

## ⚙️ Tech Requirements

* React.js (useState, props)
* Vite
* JavaScript
* CSS
* dnd-kit (for drag & drop)

---

## 🎨 UI Requirements

* Card-based layout
* 3 columns (Kanban board)
* Clean and simple design
* Consistent spacing and colors

---

## 🎯 Expected Outcome

A fully working Kanban board that:

* Manages tasks efficiently
* Uses React state properly
* Has a good UI
* Is ready for portfolio use

---

## 🏁 Final Goal

Create a **Trello-like application** using React that demonstrates:

* State management
* Component structure
* Real-world UI design
