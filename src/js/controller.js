import { todoList, Tasks } from './model';
import addTodoItem from './view';

export default function createTodo(value) {
  const todoItem = new Tasks(value);
  todoList.push(todoItem);
  addTodoItem(todoItem);
}
