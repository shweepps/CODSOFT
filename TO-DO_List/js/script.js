
function getTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    return JSON.parse(tasksJSON) || [];
}


function saveTasks(tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
}


function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>${task}</div>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);
    });
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();

    if (newTask !== '') {
        const tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks);
        taskInput.value = '';
        renderTasks();
    }
}


function editTask(index) {
    const tasks = getTasks();
    const updatedTask = prompt('Edit the task:', tasks[index]);

    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        saveTasks(tasks);
        renderTasks();
    }
}


function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}


renderTasks();
