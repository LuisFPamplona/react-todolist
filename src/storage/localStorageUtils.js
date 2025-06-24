export function saveTasks(taskList) {
  localStorage.setItem("tasklist", JSON.stringify(taskList));
}

export function loadTasks() {
  if (JSON.parse(localStorage.getItem("tasklist"))) {
    const taskList = localStorage.getItem("tasklist");
    return taskList;
  }
}
