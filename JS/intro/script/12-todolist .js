const todolist = [];
renderTodoList();

document.querySelector('.js-add-button')
    .addEventListener('click',() => {
        addTodo();
    })
function addTodo() {
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate= dateInputElement.value;
    todolist.push({
        name,dueDate
    });
    inputElement.value = '';
    renderTodoList();
}

function renderTodoList() {
    let todoListHTML='';

    todolist.forEach((todoObject,index) => {
        const name= todoObject.name;
        const dueDate= todoObject.dueDate;
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-todo-button"
        ">Delete</button> 
        `;
        todoListHTML+=html;
    });
    document.querySelector('.js-todolist')
        .innerHTML=todoListHTML;
    document.querySelectorAll('js-delete-todo-button').forEach((deleteButton,index)=> {
        deleteButton.addEventListener('click',()=> {
            todolist.splice(index,1);
            renderTodoList();
        });
    })
}
