document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    let tasks = [];

    
    function renderTasks() {
        pendingList.innerHTML = '';
        completedList.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');

            const taskDetails = document.createElement('div');
            taskDetails.classList.add('task');
            taskDetails.innerHTML = `<span>${task.name}</span><span class="time">${task.timeAdded}</span>`;

            const actions = document.createElement('div');
            actions.classList.add('actions');

            if (!task.completed) {
                const completeBtn = document.createElement('button');
                completeBtn.classList.add('complete');
                completeBtn.innerText = '✓';
                completeBtn.addEventListener('click', () => markAsComplete(index));
                actions.appendChild(completeBtn);

                const editBtn = document.createElement('button');
                editBtn.classList.add('edit');
                editBtn.innerText = '✎';
                editBtn.addEventListener('click', () => editTask(index));
                actions.appendChild(editBtn);

                pendingList.appendChild(taskItem);
            } else {
                const timeCompleted = document.createElement('span');
                timeCompleted.classList.add('time');
                timeCompleted.innerText = `Completed at: ${task.timeCompleted}`;
                taskDetails.appendChild(timeCompleted);
            }

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.innerText = '🗑';
            deleteBtn.addEventListener('click', () => deleteTask(index));
            actions.appendChild(deleteBtn);

            taskItem.appendChild(taskDetails);
            taskItem.appendChild(actions);

            if (task.completed) {
                completedList.appendChild(taskItem);
            } else {
                pendingList.appendChild(taskItem);
            }
        });
    }

    
    addTaskBtn.addEventListener('click', function() {
        const taskName = newTaskInput.value.trim();
        if (taskName) {
            const currentTime = new Date().toLocaleString();
            tasks.push({ name: taskName, completed: false, timeAdded: currentTime, timeCompleted: null });
            newTaskInput.value = '';
            renderTasks();
        }
    });

    
    function markAsComplete(index) {
        tasks[index].completed = true;
        tasks[index].timeCompleted = new Date().toLocaleString();
        renderTasks();
    }

    
    function editTask(index) {
        const newTaskName = prompt('Edit task:', tasks[index].name);
        if (newTaskName) {
            tasks[index].name = newTaskName;
            renderTasks();
        }
    }

    
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }
});
