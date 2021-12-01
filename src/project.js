import { data } from './data.js';

const projectList = document.querySelector('.project-list');
const deleteBtn = document.querySelector('.delete-project');
const taskList = document.querySelector('.task-list');

// REMOVE PROJECT AND TASKS FROM DOM AND DATA:
const deleteEvent = (e) => {
  if (e.target.classList.contains('delete-project')) {
    const confirmDelete = confirm(
      'Warning! You will lose all tasks within this project, are you sure?'
    );
    if (confirmDelete) {
      const projectElement = e.target.parentElement;
      const projectName = projectElement.firstChild.innerText;
      const currentProject = document.querySelector('.project-header');
      if (projectName === currentProject.innerText) {
        currentProject.innerText = 'Select a project...'
      }
      projectElement.remove();
      taskList.replaceChildren();
      delete data[projectName];
    }
  }
}

const appendProjectToDom = (projectName) => {
  const projectElement = document.createElement('li');
  projectElement.setAttribute('class', 'project-item');
  projectElement.innerHTML = `<h4 class="project-name">${projectName}</h4>
                              <img class="delete-icon delete-project"
                                src="../icons/delete.svg">`;
  projectList.appendChild(projectElement);
  taskList.replaceChildren();
}

projectList.addEventListener('click', deleteEvent);



export { appendProjectToDom };
