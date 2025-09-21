const todolist = [];
renderTodoList();
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

    for(let i=0;i<todolist.length;i++) {
        const name= todoObject.name;
        const dueDate= todoObject.dueDate;
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button" onclick="
        todolist.splice();
        renderTodoList();
        ">Delete</button> 
        `;
        todoListHTML+=html;
    }
    document.querySelector('.js-todolist')
        .innerHTML=todoListHTML;
}
