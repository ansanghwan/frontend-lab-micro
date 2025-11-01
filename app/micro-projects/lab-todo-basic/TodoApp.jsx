"use client";
import { useState, useEffect } from "react";
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

      {/* 입력 폼 */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>

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
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
              />
              <span className={todo.done ? styles.done : ""}>{todo.text}</span>
            </label>
            <button
              className={styles.delete}
              onClick={() => handleDelete(todo.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
