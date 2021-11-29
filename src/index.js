import './style.css';
import { factory } from './factory.js';
import { data } from './data.js';
import { appendTaskToDOM } from './task_card.js';

// TASK ADDING FORM AND EVENTS
const projectHeader = document.querySelector('.project-header');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskForm = document.querySelector('.task-form');
const submitTaskBtn = document.querySelector('#submit-task-form');
const closeTaskBtn = document.querySelector('#close-task-form');
//const checkCircle = document.querySelector('.check-circle');

addTaskBtn.addEventListener('click', ()=> {
  taskForm.style.visibility = 'visible';
  taskForm.reset();
});
closeTaskBtn.addEventListener('click', ()=> {
  taskForm.style.visibility = 'hidden';
});

submitTaskBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const name = document.querySelector('#task-name').value;
  const info = document.querySelector('#task-info').value;
  const due = document.querySelector('#task-due').value;
  const priority = document.querySelector('#task-priority').value;

  if (!name) {
    alert('Please give the task a name.');
  } else {
    const taskObj = factory(name, info, due, priority);

    // Add task to project in data structure:
    const projectName = projectHeader.innerText;
    data[projectName].push(taskObj);
    console.log(data);

    appendTaskToDOM(taskObj);
    taskForm.style.visibility = 'hidden';
  }
});
// ==== end of task form and event ====

// Handle delete task and checkbox =====
// Put this in index.js form handling data
// DELETE TASKS EVENT and function =============
  // const tasksToDelete = document.querySelectorAll('.delete-task');
  // const deleteTask = (e) => {
  //   const element = e.target.parentElement;
  //   // get the name of the card
  //   const elementName = element.children[1].innerText;
  //   element.remove();
  //   // REMOVE TASK FROM DATA STRUCTURE:
  //   //  current project ???
  //   const removeIndex = data[currentProject].findIndex(i => {
  //     return i.name === elementName;
  //   });
  //   data[currentProject].splice(removeIndex, 1);
  // }
  // tasksToDelete.forEach(i => {
  //   i.removeEventListener('click', deleteTask);
  //   i.addEventListener('click', deleteTask);
  // });
// ====== end delete tasks ==========


// import {
//   appendProjectToDom,
//   taskContent,
//   appendTaskToDOM
// } from './dom-methods';
//
//
// // ==== INIT PROJECT FROM DATA =========
//
// // APPEND PROJECT LIST FROM DATA
// const projects = Object.keys(data);
// const defaultProject = projects[0];
// projects.forEach(i => appendProjectToDom(i));
//
// // APPEND TASK LIST FOR DEFAULT PROJECT
// const defaultTaskArray = data[defaultProject];
// defaultTaskArray.forEach(i => {
//   //console.log(i);
//   const taskHTML = taskContent(i);
//   appendTaskToDOM(taskHTML);
// });
//
// // ==== end of init =========
//
// // ==== PROJECT FORM HANDLING ====
//   // NOTE - need to append to data structure too
// const addProjectBtn = document.querySelector('#add-project-btn');
// const projectForm = document.querySelector('.project-form');
// const submitProjectBtn = document.querySelector('#submit-project-form');
// const closeProjectForm = document.querySelector('#close-project-form');
//
// addProjectBtn.addEventListener('click', ()=> {
//   projectForm.style.visibility = 'visible';
//   projectForm.reset();
// });
//
// submitProjectBtn.addEventListener('click', (e)=> {
//   e.preventDefault();
//   const projectInput = projectForm.querySelector('#form-p-name');
//   if (!projectInput.value) {
//     alert('Please give project a name.');
//   } else {
//     appendProjectToDom(projectInput.value);
//     projectForm.style.visibility = 'hidden';
//   }
// });
//
// closeProjectForm.addEventListener('click', ()=> {
//   projectForm.style.visibility = 'hidden';
// });

// // TASK FORM EVENT HANDLING ==========
// =========== end of new task ==============

// === NOTES ===
// ADD & REMOVE TASKs FROM DATA STRUCTURE logic:
  // data.a.push({name: 'q', value: 78});
  // const removeIndex = data.a.findIndex(i => i.name === 'abc');
  // data.a.splice(removeIndex, 1);
// ADD PROJECT to data:
  // data['Gym'] = [];
  //console.log(data);

// function that renders projects and tasks from saved arrays to DOM.

// === PROJECT BREAKDOWN ===

  // Task list:
    // tick box
    // task info button and display
    // priority color card
    // date formatter library
  // Data structure update
  // user local storage
    // render from storage on init

// TIP - look at library project for ideas.
