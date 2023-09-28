import Todos from "./components/Todos/Todos";
import "./App.css";
import { TodosModel } from "./components/Todos/Todos.type";
import NewTodo from "./components/NewTodo/NewTodo";
import { useState } from "react";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
