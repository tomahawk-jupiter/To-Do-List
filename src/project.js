import { data } from './data.js';

const projectList = document.querySelector('.project-list');
const deleteBtn = document.querySelector('.delete-project');

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
      delete data[projectName];
    }
  }
}

const appendProjectToDom = (projectName) => {
  const projectElement = document.createElement('li');
  projectElement.setAttribute('class', 'project-item');
  projectElement.innerHTML = `<div class="project-name">${projectName}</div>
                              <img class="delete-icon delete-project"
                                src="../icons/delete.svg">`;
  projectList.appendChild(projectElement);
}

projectList.addEventListener('click', deleteEvent);



export { appendProjectToDom };
