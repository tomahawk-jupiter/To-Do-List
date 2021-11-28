import { data } from './data.js';

// Add new project to DOM and data
const appendProjectToDom = (name) => {
  const projectList = document.querySelector('.project-list');
  const newProject = document.createElement('li');
  projectList.appendChild(newProject);
  newProject.innerText = name;
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
          <img class="delete-icon" src="../icons/delete.svg" alt="delete icon">`;
}

// add task card to the DOM and add contents
const appendTaskToDOM = (taskHTML) => {
  const taskList = document.querySelector('.task-list');
  const taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task-card');
  taskCard.innerHTML = taskHTML;
  taskList.appendChild(taskCard);

  // add event listeners to task card:
  // tick, info, delete
  // color card based on priority
}

export { appendProjectToDom, taskContent, appendTaskToDOM};
