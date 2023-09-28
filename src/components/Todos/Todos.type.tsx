import Todos from "./Todos";

export interface TodosModel {
  id: string;
  text: string;
}

interface TodosProps {
  items: TodosModel[];
  onRemoveTodo: (id: string) => void;
}

export default TodosProps;
