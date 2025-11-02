import styles from "./TodoApp.module.scss";

export default function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}
