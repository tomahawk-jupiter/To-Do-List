import { data } from './data.js';

// Add new project to DOM and data
const appendProjectToDom = (name) => {
  const projectList = document.querySelector('.project-list');
  const newProject = document.createElement('li');
  projectList.appendChild(newProject);
  //newProject.innerText = name;

  newProject.innerHTML = `<div>${name}</div>
                          <img class="delete-icon delete-project" src="../icons/delete.svg">`;

  const projectToDelete = document.querySelectorAll('.delete-project');

  const deleteProject = (e) => {
    const sure = prompt('You will lose all tasks in this project. Are you sure?');
    if (sure.toLowerCase() === 'yes') {
      const element = e.target.parentElement;
      element.remove();
    }
  }
  projectToDelete.forEach(i => {
    i.removeEventListener('click', deleteProject);
    i.addEventListener('click', deleteProject);
  });
  // Add new project to data:
  data.name = name;
}

// construct task card html content
const taskContent = (newTaskObj) => {
  const check = newTaskObj.check;
  const name = newTaskObj.name;
  const info = newTaskObj.info;
  const due = newTaskObj.due;
  const priority = newTaskObj.priority;

  return `<div class="check-box">
            <div class="check-circle">
              <img src="../icons/tick.svg" alt="tick-icon">
            </div>
          </div>
          <div class="task-title">${name}</div>
          <div class="task-info">Info</div>
          <div class="task-due">${due}</div>
          <img class="delete-icon delete-task" src="../icons/delete.svg" alt="delete icon">`;
}

// add task card to the DOM and add contents
const appendTaskToDOM = (taskHTML) => {
  const taskList = document.querySelector('.task-list');
  const taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task-card');
  taskCard.innerHTML = taskHTML;
  taskList.appendChild(taskCard);

// DELETE TASKS EVENT and function
  const tasksToDelete = document.querySelectorAll('.delete-task');

  const deleteTask = (e) => {
    const element = e.target.parentElement;
    element.remove();
  }
  tasksToDelete.forEach(i => {
    i.removeEventListener('click', deleteTask);
    i.addEventListener('click', deleteTask);
  });

  // add event listeners to task card:
  // tick, info, delete
  // color card based on priority
}


export { appendProjectToDom, taskContent, appendTaskToDOM };
