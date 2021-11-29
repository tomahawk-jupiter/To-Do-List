import { data } from './data.js';
// TO DO
  // box check
    // to update check in the data currnent project needed
    // try to pass check state to index.js and update data there

  // display Info

// Construct task card html content:
const createTaskHTML = (taskObj) => {
  const check = taskObj.check;
  const name = taskObj.name;
  const info = taskObj.info;
  const due = taskObj.due;
  const priority = taskObj.priority;

  return `<div class="check-box">
            <div class="check-circle"></div>
          </div>
          <div class="task-name">${name}</div>
          <div class="task-info">Info</div>
          <div class="task-due">${due}</div>
          <img class="delete-icon delete-task"
              src="../icons/delete.svg" alt="delete icon">`;
}

// Update task check state:
const updateCheckState = (projectName, id, checkState) => {
  data[projectName].map(i => {
    if (i.id === id) {
      i.check = checkState;
      //console.log(i.check);
    }
  });
}

// Add task card to the DOM and add contents:
const appendTaskToDOM = (taskObj) => {
  const projectHeader = document.querySelector('.project-header');
  const projectName = projectHeader.innerHTML;
  const taskHTML = createTaskHTML(taskObj);
  const taskList = document.querySelector('.task-list');
  const taskCard = document.createElement('div');
  const checkCircle = document.querySelector('.check-circle');
  const id = taskObj.id;

  const tickHTML = `<img class="tick-img" src="../icons/tick.svg" alt="tick-icon">`;
  taskCard.setAttribute('class', 'task-card');
  taskCard.setAttribute('id', id);
  taskCard.innerHTML = taskHTML;
  taskList.appendChild(taskCard);

  const priorityLevel = taskObj.priority;
  const color = priorityLevel === 'high' ? 'red'
    : priorityLevel === 'medium' ? 'orange'
    : 'green';
  taskCard.style['background-color'] = color;

  // tick the box when render tasks from stored data:
  if (taskObj.check) {
    checkCircle.innerHTML = tickHTML;
  }
  // HANDLE CLICK EVENTS FOR TASK CARD:
  taskCard.addEventListener('click', (e)=> {
    const target = e.target;

    // HANDLE INFO DISPLAY ON CLICK
    if (target.classList.contains('task-info')) {
      const id = e.path[1].id;
      data[projectName].map(i => {
        if (i.id === id) {
          console.log(i.info);
          // DISPLAY INFO
        }
      });
    }

  // HANDLE TICK BOX:
    const unChecked = target.classList.contains('check-circle');
    if (unChecked) {
      //id = e.path[1].id;
      const id = e.path[2].id;
      target.innerHTML = tickHTML;
      taskCard.style['background-color'] = '#aaaaff';
      updateCheckState(projectName, id, true);
    } else if (target.classList.contains('tick-img')) {
      const id = e.path[3].id;
      target.remove();
      taskCard.style['background-color'] = color;
      updateCheckState(projectName, id, false);
    }

    // HANDLE REMOVE TASKS
    if (target.classList.contains('delete-task')) {
      const taskCard = e.target.parentElement;
      const id = taskCard.id;
      taskCard.remove();
      // REMOVE TASK FROM DATA STRUCTURE
      data[projectName].map((task, index) => {
        if (task.id  === id) {
          data[projectName].splice(index, 1);
          console.log(data[projectName]);
        }
      });
    }

  }); // addEventListener end


} // appendTaskToDOM end

export { appendTaskToDOM };