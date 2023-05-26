function getTaskListFromLocalStorage() {
    const taskList = localStorage.getItem('taskList');
    return taskList ? JSON.parse(taskList) : [];
}
function saveTaskListToLocalStorage(taskList) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

function createTaskElement(task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => {
        deleteTask(task);
    });
    return li;
}
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const newTask = taskInput.value;
    if (newTask.trim() !== "") {
        const taskElement = createTaskElement(newTask);
        taskList.appendChild(taskElement);
        taskInput.value = "";

        const taskListFromLocalStorage = getTaskListFromLocalStorage();
        taskListFromLocalStorage.push(newTask);
        saveTaskListToLocalStorage(taskListFromLocalStorage);
    }
}

function deleteTask(task) {
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].textContent === task) {
            tasks[i].remove();
            const taskListFromLocalStorage = getTaskListFromLocalStorage();
            const updatedTaskList = taskListFromLocalStorage.filter(item => item !== task);
            saveTaskListToLocalStorage(updatedTaskList);

            break;
        }
    }
}
function loadTaskList() {
    const taskListFromLocalStorage = getTaskListFromLocalStorage();
    const taskList = document.getElementById("taskList");

    taskListFromLocalStorage.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

const addTaskButton = document.getElementById("addTaskButton");
// addTaskButton.addEventListener("click", addTask);
// console.log(taskElement)
// loadTaskList();