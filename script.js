const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.title;

        if (task.completed) {
            taskElement.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.type = 'button';

        deleteButton.addEventListener('click', function() {
            const index = tasks.indexOf(task);

            if (index !== -1) {
                tasks.splice(index, 1);
            }

            renderTasks();
        });

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        checkbox.addEventListener('change', function() {
            task.completed = checkbox.checked;
            renderTasks();
        });

taskElement.appendChild(checkbox);

        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
    });
}

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    tasks.push({title: taskText,completed: false});
    renderTasks();

    taskInput.value = '';
});

