import { useState } from "react";
import Form from "./Form";
import TodosList from "./TodosList";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedItems = todos.filter((mytodo) => mytodo.done).length;
  const totalItems = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodosList todos={todos} setTodos={setTodos}></TodosList>
      <Footer completedItems={completedItems} totalItems={totalItems}></Footer>
    </div>
  );
}
