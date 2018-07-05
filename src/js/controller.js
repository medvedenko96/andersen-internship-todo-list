import { todoList, Tasks } from './model';
import View from './view';

const view = new View();

export default class Controller {
  createTodo(value) {
    const todoItem = new Tasks(value);
    todoList.push(todoItem);
    view.addTodoItem(todoItem);
  }
}
