// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener to the add button
addButton.addEventListener('click', addTask);

// Add task to the list
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === '') {
    return; // Ignore empty task
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'taskItem';

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton';
  deleteButton.textContent = 'Delete';

  // Add event listener to the delete button
  deleteButton.addEventListener('click', deleteTask);

  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = ''; // Clear the input field
}

// Delete task from the list
function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}