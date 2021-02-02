//Selectors

let todoInput = document.querySelector('#todo-input'),
    todoButton = document.querySelector('#todo-btn'),
    todoList = document.querySelector('#todo-list'),
    filterOption = document.querySelector('.filter-todo')

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();

    //Todo Div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create LI
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    let completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);

    //delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input field
    todoInput.value = '';

}

function checkDelete(e) {
    let item = e.target;

    //delete todo
    if(item.classList[0] === 'delete-btn') {
        item.parentElement.remove();
    }

    //check list
    if(item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed');
    }
}

function filterTodo() {
    let todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('uncompleted')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}
