
const todoList = document.getElementById('todo-list');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        data.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.title;
            todoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching todos:', error));
