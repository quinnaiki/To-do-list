function addTask() {
  const taskInput = document.getElementById('inputTask');
  const taskList = document.getElementById('ListofTasks');

  if (taskInput.value !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function removeTask(button) {
  const taskList = document.getElementById('ListofTasks');
  const taskItem = button.parentNode;
  taskList.removeChild(taskItem);
}