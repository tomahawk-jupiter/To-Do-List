import { data } from './data.js';

let currentProject = 'General';

// Construct task card html content:
const taskContent = (newTaskObj, updateData) => {
  const check = newTaskObj.check;
  const name = newTaskObj.name;
  const info = newTaskObj.info;
  const due = newTaskObj.due;
  const priority = newTaskObj.priority;

  // >>> ADD TASK TO DATA STRUCTURE should go here:
  if (updateData === true) {
    data[currentProject].push(newTaskObj);
  }

  return `<div class="check-box">
            <div class="check-circle">
              <img src="../icons/tick.svg" alt="tick-icon">
            </div>
          </div>
          <div class="task-name">${name}</div>
          <div class="task-info">Info</div>
          <div class="task-due">${due}</div>
          <img class="delete-icon delete-task" src="../icons/delete.svg" alt="delete icon">`;
}

// Add task card to the DOM and add contents:
const appendTaskToDOM = (taskHTML) => {
  const taskList = document.querySelector('.task-list');
  const taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task-card');
  taskCard.innerHTML = taskHTML;
  taskList.appendChild(taskCard);

// INFO click EVENT

// DELETE TASKS EVENT and function =============
  const tasksToDelete = document.querySelectorAll('.delete-task');

  const deleteTask = (e) => {
    const element = e.target.parentElement;
    // get the name of the card
    const elementName = element.children[1].innerText;

    element.remove();
    // REMOVE TASK FROM DATA STRUCTURE:
    //  current project ???
    const removeIndex = data[currentProject].findIndex(i => {
      return i.name === elementName;
    });
    data[currentProject].splice(removeIndex, 1);
  }

  tasksToDelete.forEach(i => {
    i.removeEventListener('click', deleteTask);
    i.addEventListener('click', deleteTask);
  });
// ====== end delete tasks =====

  // HANDLE TICK BOX
    // add the tick and change check=true in data structure.
    // change color of completed tasks to blue
  // HANDLE INFO DISPLAY ON CLICK
  // color card based on priority
    // green, yello, red
}

// Add new project to DOM and data
const appendProjectToDom = (name) => {
  const projectList = document.querySelector('.project-list');
  const newProject = document.createElement('li');
  projectList.appendChild(newProject);

  newProject.innerHTML = `<div class="project-name">${name}</div>
                          <img class="delete-icon delete-project" src="../icons/delete.svg">`;

// ========= EVENTs to select project ================
  const selectProject = (e) => {
    console.log({currentProject});
    console.log({click: e.target.innerText});
    if (currentProject == e.target.innerText) {
      console.log('Project already selected');
    } else {
      currentProject = e.target.innerText;

      const taskList = document.querySelector('.task-list');
      console.log({taskList});
      taskList.replaceChildren();
      console.log({taskList});

    // BUGGY LOGIC - renders duplicates of tasks:
      const taskArray = data[currentProject];
      console.log({taskArray});
      if(taskArray) {
        taskArray.forEach(i => {
          console.log({i});
          const taskHTML = taskContent(i);
          console.log({taskHTML});
          appendTaskToDOM(taskHTML);
        });
      }
    }
  }
  // Add project select events
  const projectName = document.querySelectorAll('.project-name');
  projectName.forEach(i => {
    i.removeEventListener('click', selectProject);
    i.addEventListener('click', selectProject);
  });
// ==== end of project select ========

  // Delete projects
  const projectToDelete = document.querySelectorAll('.delete-project');

  const deleteProject = (e) => {
    const sure = prompt('You will lose all tasks in this project. Are you sure?');
    if (sure && sure.toLowerCase() === 'yes') {
      const element = e.target.parentElement;
      const project = element.children[0].innerText;
      element.remove();

      // REMOVE FROM DATA STRUCTURE should go here:
      // delete data[project];
    }
  }
  projectToDelete.forEach(i => {
    i.removeEventListener('click', deleteProject);
    i.addEventListener('click', deleteProject);
  });

  // Add new project to data:
  data.name = name;
}



export { appendProjectToDom, taskContent, appendTaskToDOM };
