import './style.css';
import { factory } from './factory.js';
import { data } from './data.js';
import { appendTaskToDOM } from './task_card.js';
import { format } from 'date-fns';
import { appendProjectToDom } from './project.js'

// TASK ADDING FORM AND SUBMIT:
const projectHeader = document.querySelector('.project-header');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskForm = document.querySelector('.task-form');
const submitTaskBtn = document.querySelector('#submit-task-form');
const closeTaskBtn = document.querySelector('#close-task-form');
const nameInput = document.querySelector('#task-name');
//const checkCircle = document.querySelector('.check-circle');

addTaskBtn.addEventListener('click', ()=> {
  taskForm.style.visibility = 'visible';
  taskForm.reset();
  nameInput.focus();
});
closeTaskBtn.addEventListener('click', ()=> {
  taskForm.style.visibility = 'hidden';
});

submitTaskBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const name = document.querySelector('#task-name').value;
  const info = document.querySelector('#task-info').value;
  const day = document.querySelector('#day-due').value;
  const month = document.querySelector('#month-due').value;
  const year = document.querySelector('#year-due').value;
  console.log({day});
  const priority = document.querySelector('#task-priority').value;

  if (!name) {
    alert('Please give the task a name.');
  } else {

  // DEAL WITH Date
    // Deal with invalid dates:
    // Doesn't flag days with less than 31
    if (day < 1 || day > 31) {
      alert('Invalid Day');
    } else if (month < 1 || month > 12) {
      alert('Invalid Month');
    } else if (year < new Date().getFullYear()) {
      alert('Deadline passed already!')
    }

    const formattedDate = format(
      new Date(year, month - 1, day), 'EEE do LLL yy');
    const taskObj = factory(name, info, formattedDate, priority);

    // Add task to project in data structure:
    const projectName = projectHeader.innerText;
    data[projectName].push(taskObj);

    appendTaskToDOM(taskObj);
    taskForm.style.visibility = 'hidden';
  }
}); // end of task form display and submit.

// ==== PROJECT FORM ======
const projectForm = document.querySelector('.project-form');
const closeProjectForm = document.querySelector('#close-project-form');
const newProjectName = document.querySelector('#form-p-name');
const submitProjectBtn = document.querySelector('#submit-project-form');
const openProjectForm = document.querySelector('#add-project-btn');

openProjectForm.addEventListener('click', ()=> {
  projectForm.style.visibility = 'visible';
  projectForm.reset();
  newProjectName.focus();
});
closeProjectForm.addEventListener('click', ()=> {
  projectForm.style.visibility = 'hidden';
});

submitProjectBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const projectName = newProjectName.value;

  // Check if project is already in data:
  const projectArray = Object.keys(data);
  if (projectArray.includes(projectName)) {
    alert('Project Name already in use!');
  } else {
    appendProjectToDom(projectName);
    // CHANGE PROJECT HEADER:
    projectHeader.innerText = projectName;
    // Add project to data file:
    data[projectName] = [];
    projectForm.style.visibility = 'hidden';
  }
});


// SELECT A PROJECT EVENT
const projectList = document.querySelector('.project-list');

projectList.addEventListener('click', (e)=> {
  if (e.target.classList.contains('project-name')) {
    const taskList = document.querySelector('.task-list');
    const project = e.target.innerText;
    const taskArray = data[project];

    // SET PROJECT HEADER:
    projectHeader.innerText = project;
    // CLEAR THE PREVIOUSLY SELECTED TASKS:
    taskList.replaceChildren();
    // RENDER THE TASK LIST TO DOM:
     taskArray.forEach(task => {
       appendTaskToDOM(task);
     });
  }
});

// INIT FROM DATA.JS
const projectArray = Object.keys(data);
const project = projectArray[0];
const taskArray = data[project];

// ADD PROJECTS TO SIDE PANEL:
projectArray.forEach(project => {
  appendProjectToDom(project);
});
// SET TASK LIST HEADER:
projectHeader.innerText = project;
// ADD TASKS TO TASK LIST:
taskArray.forEach(task => {
  appendTaskToDOM(task);
});
