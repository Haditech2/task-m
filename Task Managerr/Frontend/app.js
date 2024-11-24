document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const task = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        deadline: document.getElementById('deadline').value,
        priority: document.getElementById('priority').value,
    };

    // Post the task to the backend
    const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });

    if (response.ok) {
        const data = await response.json();
        displayTask(data);
        document.getElementById('task-form').reset();
    } else {
        console.error('Error creating task');
    }
});

// Display tasks in the list
function displayTask(task) {
    const tasksContainer = document.getElementById('tasks');

    const taskItem = document.createElement('div');
    taskItem.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-start';
    taskItem.innerHTML = `
        <div>
            <h5 class="mb-1">${task.title}</h5>
            <p class="mb-1">${task.description}</p>
            <small>Deadline: ${task.deadline || 'No deadline'}</small>
        </div>
        <span class="task-priority ${task.priority}">${task.priority}</span>
    `;

    tasksContainer.appendChild(taskItem);
}
