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
        saveTask(newTask);
    }
}

function deleteTask(task) {
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].textContent === task) {
            tasks[i].remove();
            deleteTaskFromServer(task);
            break;
        }
    }
}

function saveTask(task) {
    console.log(`Salvataggio del compito sul server: ${task}`);
}
function deleteTaskFromServer(task) {
    console.log(`Eliminazione del compito dal server: ${task}`);
}

const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

async function saveTask(task) {
    try {
        const response = await fetch("https://dummyjson.com/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: task })
        });

        if (!response.ok) {
            throw new Error('Errore durante il salvataggio del compito');
        }

        console.log(`Compito salvato sul server: ${task}`);
    } catch (error) {
        console.error(error);
    }
}
async function deleteTaskFromServer(task) {
    try {
        const response = await fetch("https://dummyjson.com/products", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: task })
        });

        if (!response.ok) {
            throw new Error("Errore durante l'eliminazione del compito");
        }

        console.log(`Compito eliminato dal server: ${task}`);
    } catch (error) {
        // console.error(error);
    }
}