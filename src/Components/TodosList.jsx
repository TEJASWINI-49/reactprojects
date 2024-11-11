import TodosComponent from "./TodosComponent";
import styles from "./todoList.module.css";
export default function TodosList({ todos, setTodos }) {
  const sortedItems = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todoList}>
      {sortedItems.map((item) => (
        <TodosComponent
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
