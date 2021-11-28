import './style.css';
import {taskMaker} from './task-maker';

// function that renders projects and tasks from saved arrays to DOM.

// Add new project to DOM and array
const projectArray = [];
const addProjectToDOM = (name) => {
  const projectList = document.querySelector('.project-list');
  const newProject = document.createElement('li');
  projectList.appendChild(newProject);
  newProject.innerText = name;
  projectArray.push(name);
}
addProjectToDOM('General');
addProjectToDOM('Coding');

const taskArray = [];

// construct task card html content
const taskContent = (newTaskObj) => {
    const title = newTaskObj.title;
    const info = newTaskObj.info;
    const due = newTaskObj.dueDate;
    const priority = newTaskObj.priority;

    return `<div class="check-box">
              <div class="check-circle">
                <img src="../icons/tick.svg" alt="tick-icon">
              </div>
            </div>
            <div class="task-title">${title}</div>
            <div class="task-info">Info</div>
            <div class="task-due">${due}</div>
            <img class="delete-icon" src="../icons/delete.svg" alt="delete icon">`;
}

// add task card to the DOM
const appendTaskToDOM = () => {
  // taskMaker: title, info, dueDate, priority
  const newTaskObj = taskMaker('Shopping', 'pasta, pizza, etc.', 'fri', 'low');
  const taskHTML = taskContent(newTaskObj);
  const taskList = document.querySelector('.task-list');
  const taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task-card');
  taskCard.innerHTML = taskHTML;
  taskList.appendChild(taskCard);

  // add event listeners to task card:
  // tick, info, delete
  // color card based on priority
}
appendTaskToDOM();


// === PROJECT BREAKDOWN ===
  // Project panel:
    // add button for project list
    // delete button for project list
  // Task list:
    // delete button
    // tick box
    // task info button and display
    // add task - form
    // priority color card
    // date formatter library
  // user local storage
    // render from storage on init

// TIP - look at library project for ideas.
