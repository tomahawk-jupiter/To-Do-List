import './style.css';
import { factory } from './factory.js';
import { data } from './data.js';
import { appendTaskToDOM } from './task_card.js';
import { format, compareAsc } from 'date-fns';

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
});
// ==== end of task form and event ====

// ==== PROJECT FORM ======

// ==== INITIAL RENDER PROJECT AND TASK with a loop ====
// Below example of ordering dates, render tasks by due date.

// import { format, compareAsc } from 'date-fns'
//
// format(new Date(2014, 1, 11), 'MM/dd/yyyy')
// //=> '02/11/2014'
//
// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// dates.sort(compareAsc)
// //=> [
// //   Wed Feb 11 1987 00:00:00,
// //   Mon Jul 10 1989 00:00:00,
// //   Sun Jul 02 1995 00:00:00
// // ]



// OLDER CODE BELOW:

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
