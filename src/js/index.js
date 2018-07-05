/*
import { EventEmitter } from './EventEmitter';
const emitter = new EventEmitter();
*/
import { setLocalStorage, getLocalStorage } from './store';
import render from './view';

const todoList = getLocalStorage();
const add = document.getElementById('create-todo');
const input = document.getElementById('input-todo');

const generateId = () => Math.random().toString(36).substr(2, 16);

class Tasks {
  constructor(title) {
    this.title = title;
    this.check = false;
    this.id = generateId();
  }
}

render();

add.addEventListener('click', () => {
  createTodo(input.value);
  setLocalStorage(todoList);
});

function addTodoItem(todoItem) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = todoItem.title;
  document.getElementById('todo-container').appendChild(taskItem);
}

function createTodo(value) {
  const todoItem = new Tasks(value);
  todoList.push(todoItem);
  addTodoItem(todoItem);
  setLocalStorage(todoList);
}

/*
function deleteTodo () {

} */


export { todoList, addTodoItem };
