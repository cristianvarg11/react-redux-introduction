export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface Store {
  todos: Array<Todo>;
  newTodo: string;
}
