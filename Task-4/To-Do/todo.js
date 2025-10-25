const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAll = document.getElementById("clearAll");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const remainingTasks = document.getElementById("remainingTasks");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks(tasks);
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(tasks);
}

function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const spanText = document.createElement("span");
    spanText.textContent = task.text;
    spanText.className = "task-text";
    spanText.addEventListener("click", () => toggleTask(index));

    const btnGroup = document.createElement("div");
    btnGroup.className = "task-buttons";

    const editBtn = document.createElement("span");
    editBtn.textContent = "✎";
    editBtn.className = "edit";
    editBtn.addEventListener("click", () => editTask(index));

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    btnGroup.append(editBtn, deleteBtn);
    li.append(spanText, btnGroup);
    taskList.appendChild(li);
  });
  updateStats(tasks);
}

function updateStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  totalTasks.textContent = `Total: ${total}`;
  completedTasks.textContent = `Completed: ${completed}`;
  remainingTasks.textContent = `Remaining: ${total - completed}`;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert("Please enter a task.");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, completed: false });
  saveTasks(tasks);
  taskInput.value = "";
}

function toggleTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
}

function editTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    saveTasks(tasks);
  }
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  saveTasks(tasks);
}

function clearAllTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    localStorage.removeItem("tasks");
    loadTasks();
  }
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});
clearAll.addEventListener("click", clearAllTasks);
window.addEventListener("load", loadTasks);
