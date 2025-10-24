"use client";
import { useState } from "react";
import "./todo.scss";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h3>📝 Todo List</h3>
      <div className="input-group">
        <input
          type="text"
          value={input}
          placeholder="할 일을 입력하세요"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>추가</button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => removeTask(i)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
