import '../css/style.css';
import createTodo from './controller';

const add = document.getElementById('create-todo');
const input = document.getElementById('input-todo');

add.addEventListener('click', () => {
  createTodo(input.value);
});
