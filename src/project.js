import { data } from "./data.js";
import DelIcon from "./icons/delete.svg";

const projectList = document.querySelector(".project-list");
const taskList = document.querySelector(".task-list");

// REMOVE PROJECT AND TASKS FROM DOM AND DATA:
const deleteEvent = (e) => {
  if (e.target.classList.contains("delete-project")) {
    const confirmDelete = confirm(
      "Warning! You will lose all tasks within this project, are you sure?"
    );
    if (confirmDelete) {
      const projectElement = e.target.parentElement;
      const projectName = projectElement.firstChild.innerText;
      const currentProject = document.querySelector(".project-header");
      if (projectName === currentProject.innerText) {
        currentProject.innerText = "Select a project...";
      }
      projectElement.remove();
      taskList.replaceChildren();
      delete data[projectName];
    }
  }
};

// ADD A NEW PROJECT TO PROJECT PANEL
const appendProjectToDom = (projectName) => {
  const projectElement = document.createElement("li");
  projectElement.setAttribute("class", "project-item");

  const projectNameH4 = document.createElement("h4");
  projectNameH4.setAttribute("class", "project-name");
  projectNameH4.innerText = projectName;

  const deleteIconImg = document.createElement("img");
  deleteIconImg.setAttribute("class", "delete-icon delete-project");
  deleteIconImg.setAttribute("src", DelIcon);

  projectElement.appendChild(projectNameH4);
  projectElement.appendChild(deleteIconImg);

  projectList.appendChild(projectElement);

  // CLEAR TASKS FROM PREVIOUS PROJECT DISPLAY
  taskList.replaceChildren();
};

projectList.addEventListener("click", deleteEvent);

export { appendProjectToDom };
