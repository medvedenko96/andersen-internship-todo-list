/*
класс View - отвечает за отображение, ререндер (перерендер).
*/
import { todoList, addTodoItem } from './index';

export default function render() {
  if (todoList.length) {
    for (const todoItem of todoList) {
      addTodoItem(todoItem);
    }
  }
}

