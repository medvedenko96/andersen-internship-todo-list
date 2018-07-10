export default class View {
  addTodoItem(todoItem) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = todoItem.title;
    document.getElementById('todo-container').appendChild(taskItem);
  }
}
