"use client";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.scss";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // ✅ 필터 상태 추가

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo = { id: Date.now(), text: input.trim(), done: false };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // ✅ 필터링 로직
  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true; // all
  });

  return (
    <div className={styles.todo}>
      <h2>📝 Todo List</h2>
      <TodoForm input={input} setInput={setInput} onSubmit={handleSubmit} />
      {/* ✅ 필터 버튼 */}
      <div className={styles.filters}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? styles.active : ""}
        >
          미완료
        </button>
        <button
          onClick={() => setFilter("done")}
          className={filter === "done" ? styles.active : ""}
        >
          완료
        </button>
      </div>

      {/* 필터된 목록 */}
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}
