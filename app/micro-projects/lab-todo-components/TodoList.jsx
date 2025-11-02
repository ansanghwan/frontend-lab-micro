import styles from "./TodoApp.module.scss"; // ✅ 스타일 모듈 직접 import

export default function TodoList({ todos, onToggle, onDelete }) {
  // 할 일이 없을 때
  if (todos.length === 0) {
    return <p className={styles.none}>예정된 일이 없습니다.</p>;
  }

  // 할 일이 있을 때
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)} // ✅ props로 받은 함수 호출
            />
            <span className={todo.done ? styles.done : ""}>{todo.text}</span>
          </label>
          <button
            className={styles.delete}
            onClick={() => onDelete(todo.id)} // ✅ props로 받은 함수 호출
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
