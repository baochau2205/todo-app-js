const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// load data từ localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// render todo
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${todo.done ? "done" : ""}" onclick="toggleTodo(${index})">
        ${todo.text}
      </span>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;

    todoList.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// add todo
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();

  if (text === "") return;

  todos.push({
    text: text,
    done: false
  });

  todoInput.value = "";
  renderTodos();
});

// toggle done
function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

// delete todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// initial render
renderTodos();