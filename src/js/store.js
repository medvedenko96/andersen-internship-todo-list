function setLocalStorage(todos) {
  const objStr = JSON.stringify(todos);
  localStorage.setItem('todo-item', objStr);
}

function getLocalStorage() {
  if (localStorage.getItem('todo-item') === null) return [];
  return JSON.parse(localStorage.getItem('todo-item'));
}

export { setLocalStorage, getLocalStorage }