const createNote = document.querySelector(".todo-input-createBtn");
const taskTitle = document.querySelector(".Title-here");
const noteTitle = document.querySelector(".Short-note");
const container = document.querySelector(".todo-task-container");

// Add event listener to the button
createNote.addEventListener("click", () => {
  if (taskTitle.value === "") {
    return;
  } else {
    const newTaskDiv = document.createElement("div");
    const newTaskTitle = document.createElement("h2");
    const newTaskNote = document.createElement("p");
    const newTaskSpan = document.createElement("span");

    newTaskTitle.textContent = taskTitle.value;
    newTaskNote.textContent = noteTitle.value;

    newTaskDiv.classList.add("task");
    newTaskTitle.classList.add("task-title");
    newTaskNote.classList.add("task-note");
    newTaskSpan.classList.add("remove");

    newTaskDiv.appendChild(newTaskTitle);
    newTaskDiv.appendChild(newTaskNote);
    newTaskDiv.appendChild(newTaskSpan);
    container.appendChild(newTaskDiv);

    newTaskDiv.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("remove")) {
        container.removeChild(newTaskDiv);
      }
      if (e.target.classList.contains("task")) {
        newTaskTitle.style.textDecoration = "line-through";
        newTaskNote.style.textDecoration = "line-through";
      }
    });
    taskTitle.value = "";
    noteTitle.value = "";
  }
});
