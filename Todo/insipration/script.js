var inputBar = document.getElementById("input-bar");
const buttonAdd = document.getElementById("add-button");
const buttonRemove = document.getElementById("remove-button");
const container = document.getElementById("container");
const removeButton = document.getElementById("remove");

// function createNewTask() {
//   const newDiv = document.createElement("div");
//   newDiv.id = i;
//   newDiv.textContent = inputBar.textContent;
//   const newSpan = document.createElement("span");
//   newSpan.id = i;
//   i++;
// }

// buttonAdd.addEventListener("click", () => {
//   if (inputBar.value === "") {
//     return;
//   } else {
//     var newTask = document.createElement("div");
//     var newSpan = document.createElement("span");
//     newTask.id = "task " + i;
//     newSpan.id = "task-span " + i;
//     newTask.textContent = inputBar.value;
//     newTask.classList.add("todo-task-container");
//     newSpan.classList.add("remove");
//     newTask.appendChild(newSpan);
//     container.appendChild(newTask);
//     inputBar.value = "";
//     i++;
//   }
// });

let i = 0; // Initialize i

buttonAdd.addEventListener("click", () => {
  if (inputBar.value === "") {
    return;
  } else {
    var newTask = document.createElement("div");
    var newSpan = document.createElement("span");
    newTask.id = "task " + i;
    newSpan.id = "task-span " + i;
    newTask.textContent = inputBar.value;
    newTask.classList.add("todo-task-container");
    newSpan.classList.add("remove");
    newTask.appendChild(newSpan);
    container.appendChild(newTask);
    inputBar.value = "";
    i++; // Increment i
  }
});
buttonRemove.addEventListener("click", () => {
  container.innerHTML = "";
  inputBar.value = "";
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const li = e.target.parentElement;
    container.removeChild(li);
  }
});
