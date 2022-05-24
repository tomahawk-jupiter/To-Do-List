import "./style.css";
import { data } from "./data.js";
import { appendTaskToDOM } from "./taskCard/taskCard.js";
import { appendProjectToDom } from "./project.js";
import { taskFormModule } from "./taskCard/taskForm";

const projectHeader = document.querySelector(".project-header");

taskFormModule();

// PROJECT FORM
const projectForm = document.querySelector(".project-form");
const closeProjectForm = document.querySelector("#close-project-form");
const newProjectName = document.querySelector("#form-p-name");
const submitProjectBtn = document.querySelector("#submit-project-form");
const openProjectForm = document.querySelector("#add-project-btn");

openProjectForm.addEventListener("click", () => {
  projectForm.style.visibility = "visible";
  projectForm.reset();
  newProjectName.focus();
});
closeProjectForm.addEventListener("click", () => {
  projectForm.style.visibility = "hidden";
});

submitProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const projectName = newProjectName.value;

  // Check if project is already in data:
  const projectArray = Object.keys(data);
  if (projectArray.includes(projectName)) {
    alert("Project Name already in use!");
  } else {
    appendProjectToDom(projectName);
    // Change project header
    projectHeader.innerText = projectName;
    // Add project to data file:
    data[projectName] = [];
    projectForm.style.visibility = "hidden";
  }
});

// Change project that is currently displayed when clicked on name
const projectList = document.querySelector(".project-list");

projectList.addEventListener("click", (e) => {
  if (e.target.classList.contains("project-name")) {
    const taskList = document.querySelector(".task-list");
    const project = e.target.innerText;
    const taskArray = data[project];

    // Set project header
    projectHeader.innerText = project;
    // Clear the previously selected tasks
    taskList.replaceChildren();
    // Render the task list to DOM
    taskArray.forEach((task) => {
      appendTaskToDOM(task);
    });
  }
});

// Init project list from data
const projectArray = Object.keys(data);
const project = projectArray[0];
const taskArray = data[project];

// Add projects to side panel
projectArray.forEach((project) => {
  appendProjectToDom(project);
});

// Set task list header
projectHeader.innerText = project;

// Add tasks to task list
taskArray.forEach((task) => {
  appendTaskToDOM(task);
});
