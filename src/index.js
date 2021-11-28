import './style.css';
import { taskMaker } from './task-maker';
import { data } from './data.js';
import {
  appendProjectToDom,
  taskContent,
  appendTaskToDOM
} from './dom-methods';

// ==== INIT PROJECT FROM DATA =========

// APPEND PROJECT LIST FROM DATA
const projects = Object.keys(data);
const defaultProject = projects[0];
projects.forEach(i => appendProjectToDom(i));

// APPEND TASK LIST FOR DEFAULT PROJECT
const defaultTaskArray = data[defaultProject];
defaultTaskArray.forEach(i => {
  //console.log(i);
  const taskHTML = taskContent(i);
  appendTaskToDOM(taskHTML);
});

// ==== end of init =========

// ==== PROJECT FORM HANDLING ====
  // NOTE - need to append to data structure too
const addProjectBtn = document.querySelector('#add-project-btn');
const projectForm = document.querySelector('.project-form');
const submitProjectBtn = document.querySelector('#submit-project-form');
const closeProjectForm = document.querySelector('#close-project-form');

addProjectBtn.addEventListener('click', ()=> {
  projectForm.style.visibility = 'visible';
  projectForm.reset();
});

submitProjectBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const projectInput = projectForm.querySelector('#form-p-name');
  if (!projectInput.value) {
    alert('Please give project a name.');
  } else {
    appendProjectToDom(projectInput.value);
    projectForm.style.visibility = 'hidden';
  }
});

closeProjectForm.addEventListener('click', ()=> {
  projectForm.style.visibility = 'hidden';
});

// TASK FORM EVENT HANDLING ==========
const addTaskBtn = document.querySelector('#add-task-btn');
const taskForm = document.querySelector('.task-form');
const submitTaskBtn = document.querySelector('#submit-task-form');
const closeTaskBtn = document.querySelector('#close-task-form');

addTaskBtn.addEventListener('click', ()=> {
  taskForm.style.visibility = 'visible';
  taskForm.reset();
});

submitTaskBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const name = document.querySelector('#task-name').value;
  const info = document.querySelector('#task-info').value;
  const due = document.querySelector('#task-due').value;
  const priority = document.querySelector('#task-priority').value;
  console.log({name, info, due, priority});
  if (!name) {
    alert('Please give the task a name.');
  } else {
    const newTaskObj = taskMaker(name, info, due, priority);
    const taskHTML = taskContent(newTaskObj);
    appendTaskToDOM(taskHTML);

    taskForm.style.visibility = 'hidden';
  }
});

closeTaskBtn.addEventListener('click', ()=> {
  taskForm.style.visibility = 'hidden';
});



// =========== end of new task ==============

// === NOTES ===
// ADD & REMOVE TASKs:
  // data.a.push({name: 'q', value: 78});
  // const removeIndex = data.a.findIndex(i => i.name === 'abc');
  // data.a.splice(removeIndex, 1);
// ADD PROJECT to data:
  // data['Gym'] = [];
  //console.log(data);

// function that renders projects and tasks from saved arrays to DOM.

// === PROJECT BREAKDOWN ===
  // Project panel:
    // delete button for project list
  // Task list:
    // tick box
    // task info button and display
    // priority color card
    // date formatter library
  // Data structure update
  // user local storage
    // render from storage on init

// TIP - look at library project for ideas.
