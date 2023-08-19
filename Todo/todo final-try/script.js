const createNote = document.getElementById("create-note-btn");
const taskTitle = document.getElementById("title-input");
const noteTitle = document.getElementById("note-input");
const container = document.getElementById("todo-task-container");
const addNoteToggle = document.getElementById("add-note");
const popup = document.querySelector(".todo-input-popup ");

addNoteToggle.addEventListener("click", () => {
  container.classList.add("active");
  popup.classList.add("active");
  addNoteToggle.classList.add("active");
});

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

    newTaskDiv.classList.add("todo-task");
    newTaskTitle.classList.add("todo-task-title");
    newTaskNote.classList.add("todo-task-note");
    newTaskSpan.classList.add("remove");

    newTaskNote.appendChild(newTaskSpan);
    newTaskDiv.appendChild(newTaskTitle);
    newTaskDiv.appendChild(newTaskNote);
    container.appendChild(newTaskDiv);

    newTaskDiv.addEventListener("dblclick", () => {
      newTaskTitle.classList.toggle("active");
      newTaskNote.classList.toggle("active");
    });

    newTaskDiv.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("remove")) {
        container.removeChild(newTaskDiv);
      }
      // if (e.target.classList.contains("task")) {
      //   newTaskTitle.style.textDecoration = "line-through";
      //   newTaskNote.style.textDecoration = "line-through";
      // }
    });
    taskTitle.value = "";
    noteTitle.value = "";
    popup.classList.remove("active");

    function rename() {
      addNoteToggle.innerText = "Add note";
      const addNoteSpan = document.createElement("span");
      addNoteSpan.classList.add("button-icon");
      addNoteToggle.appendChild(addNoteSpan);
    }
    rename();
  }
  addNoteToggle.classList.remove("active");
  container.classList.remove("active");
});
