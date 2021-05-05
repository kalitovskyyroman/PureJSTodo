import * as sort from './sort.js';

const todos = [
  { title: 'a', body: 'a' },
  { title: 'c', body: 'b' },
  { title: 'b', body: 'c' },
  { title: 'd', body: 'd' },
];

const todos_place = document.querySelector('.todos');

const printTodos = (todos, place) => {
  todos.forEach(item => {
    let todo = document.createElement('div');
    todo.classList.add('container', 'todo');

    let todo_title = document.createElement('div');
    todo_title.classList.add('todo__title');

    let todo_body = document.createElement('div');
    todo_body.classList.add('todo_body');

    todo_title.innerHTML = item.title;
    todo_body.innerHTML = item.body;
    todo.appendChild(todo_title);
    todo.appendChild(todo_body);
    place.appendChild(todo);
  });
};

printTodos(todos, document.querySelector('.todos'));

const addTodo = (todos, place, updateTodos) => {
  const title = document.getElementById('title_input').value;
  const body = document.getElementById('body_input').value;

  const todo = { title: title, body: body };

  todos.push(todo);

  updateTodos(todos, place);

  document.getElementById('title_input').value = '';
  document.getElementById('body_input').value = '';
};

const updateTodos = (todos, place) => {
  place.innerHTML = '';
  printTodos(todos, place);
};

const add_btn = document.getElementById('add_todo');
add_btn.click(() => addTodo(todos, todos_place, updateTodos));

const title_sort = document.getElementById('title_sort');
title_sort.click(() => updateTodos(sort.titleSortASC(todos), todos_place));

const title_sort_asc = document.getElementById('title_sort_asc');
title_sort_asc.click(() => updateTodos(sort.titleSortASC(todos), todos_place));

const title_sort_desc = document.getElementById('title_sort_desc');
title_sort_desc.click(() => updateTodos(sort.titleSortDESC(todos), todos_place));

const body_sort = document.getElementById('body_sort');
body_sort.click(() => updateTodos(sort.bodySortASC(todos), todos_place));

const body_sort_asc = document.getElementById('body_sort_asc');
body_sort_asc.click(() => updateTodos(sort.bodySortASC(todos), todos_place));

const body_sort_desc = document.getElementById('body_sort_desc');
body_sort_desc.click(() => updateTodos(sort.bodySortDESC(todos), todos_place));
