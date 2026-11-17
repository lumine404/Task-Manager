const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const task = document.createElement('li');
    task.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';

    deleteButton.addEventListener('click', function() {
        task.remove();
    });

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = '';
});