// PRIMO ESERCIZIO : 

const todos = [{
    id: 1,
    title: "uova",
  },
  {
    id: 2,
    title: "latte",
  },
  {
    id: 3,
    title: "yogurt",
  },
  {
    id: 4,
    title: "Caffe",
  },
];

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

const listItemGen = (todoData) => {
  const listItemEl = cE("li");

  listItemEl.id = todoData.id;
  listItemEl.textContent = todoData.title;
  listItemEl.className = "listItem";

  return listItemEl;
};

const listRender = () => {
  const listItemEls = qSA(".listItem");

  listItemEls.forEach((element) =>
    element.addEventListener("click", (evt) => {
      todos.forEach((item) => {
        if (item.id === parseInt(evt.target.id)) {
          item.completed = !item.completed;
          element.classList.toggle("listCompleted");
        }
      });
    })
  );
};

const containerEl = cE("div");
const todoInputEL = cE("input");
const todoButtonEL = cE("button");
const listEl = cE("ul");

containerEl.className = "container";
todoInputEL.setAttribute("type", "text");
todoInputEL.setAttribute("placeholder", "Scrivi..");
todoInputEL.className = "todoInput";
todoButtonEL.className = "todoButton";
todoButtonEL.textContent = "Aggiungi";
listEl.className = "list";

todos.forEach((item) => listEl.append(listItemGen(item)));

containerEl.append(todoInputEL, todoButtonEL, listEl);
document.body.appendChild(containerEl);

listRender();

let inputValueText;

todoInputEL.addEventListener("change", (event) => {
  inputValueText = event.target.value;
});

todoButtonEL.addEventListener("click", () => {
  todos.push({
    id: Math.floor(Math.random() * 10000),
    title: inputValueText,
  });
  listEl.textContent = "";
  todos.forEach((item) => listEl.append(listItemGen(item)));
  listRender();
});

// FINE PRIMO ESERCIZIO  

    //   ESERCIZIO AVANZATO : 
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    
    addButton.addEventListener('click', addTodo);
    
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
      }
    }
    
    function createTodoItem(text) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const removeButton = document.createElement('button');
    
      span.textContent = text;
      removeButton.textContent = 'cancella';
      removeButton.addEventListener('click', removeTodo);
    
      li.appendChild(span);
      li.appendChild(removeButton);
    
      return li;
    }
    
    function removeTodo(event) {
      const todoItem = event.target.parentNode;
      todoList.removeChild(todoItem);
    }


      
    //   FINE ESERCIZIO AVANZATO.