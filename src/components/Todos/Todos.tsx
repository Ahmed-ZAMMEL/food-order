import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const itemList = (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return itemList;
};

export default Todos;
