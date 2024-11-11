import styles from "./todoItem.module.css";

export default function TodosComponent({ item, todos, setTodos }) {
  function deleteItem(item) {
    setTodos(todos.filter((to) => to !== item));
  }
  function handleChange(name) {
    const newArray = todos.map((mytodo) =>
      name === mytodo.name ? { ...mytodo, done: !mytodo.done } : mytodo
    );

    setTodos(newArray);
  }
  const itemstyle = item.done ? styles.itemdecor : "";

  return (
    <div className={styles.item}>
      <div className={styles.todoItem}>
        <span className={itemstyle} onClick={() => handleChange(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => deleteItem(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
