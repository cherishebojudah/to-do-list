// // Target elements in html
// let newItem = document.querySelector('input'),
//     addToList = document.querySelector('button');

// // create new element
// function createElement() {
//         let listItem = document.createElement('LI');
//             listText = document.createTextNode(newItem.value);
//         listItem.appendChild(listText);
//         document.querySelector('ul').appendChild(listItem);
//         newItem.value = '';
// }

// //create delete button
// function deleteItem() {
//     let btn = document.createElement('button');
//          btn.innerText('Delete');
//          btn.style.backgroundColor = 'red';
//          newItem.appendChild('btn');
// }

// // add eventlisteners
// addToList.addEventListener('click', createElement);
// // addToList.addEventListener('click', deleteItem);

//Selectors

let todoInput = document.querySelector('#todo-input'),
    todoButton = document.querySelector('#todo-btn'),
    todoList = document.querySelector('#todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

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
