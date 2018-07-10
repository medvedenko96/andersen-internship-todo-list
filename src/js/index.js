import '../css/style.css';
import Controller from './controller';

const cont = new Controller();

const add = document.getElementById('create-todo');
const input = document.getElementById('input-todo');

add.addEventListener('click', () => {
  cont.createTodo(input.value);
});
