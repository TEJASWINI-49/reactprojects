import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]); //asynchronous run
    console.log(todos);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Enter the todo"
            onChange={(e) => {
              setTodo({ name: e.target.value, done: false });
            }}
            value={todo.name}
          ></input>
          <button className={styles.addButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
