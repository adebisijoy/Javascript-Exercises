const todoList = [{
   name:'wash dishes',
   dueDate: '2023-07-24' 
  },
   { name: 'make dinner',
     dueDate: '2023-07-24' 
   }];

renderTodoList();

function renderTodoList() {
   let todoListHTML = '';

   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const{ name, dueDate } = todoObject;
      const html = `
      <p>
      ${name} ${dueDate} 
      <button onclick= "
       todoList.splice(${i}, 1);
       renderTodoList();
      ">Delete</button>
      </p>`;
      todoListHTML += html;
   }

   document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name, dueDate});

  inputElement.value = '';

  renderTodoList();
}