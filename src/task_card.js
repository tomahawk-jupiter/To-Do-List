import { data } from './data.js';

// Colors for priority:
const lowColor = 'green';
const medColor = 'orange';
const highColor = 'red';
const completedColor = '#ddd';
// Display info btn color;
const infoOn = 'white';
const infoOff = 'black';

// CHECK BOX (CIRCLE) TICK:
const tickHTML = `<img class="tick-img"
  src="../icons/tick.svg" alt="tick-icon">`;

// CONSTRUCT TASK CARD HTML CONTENT:
const createTaskHTML = (taskObj) => {
  const check = taskObj.check;
  const name = taskObj.name;
  const info = taskObj.info;
  const due = taskObj.due;
  const priority = taskObj.priority;
  let tick;

  if (check) {
    tick = tickHTML;
  } else {
    tick = '';
  }

  return `<div class="check-box">
            <div class="check-circle">${tick}</div>
          </div>
          <div class="task-name">${name}</div>
          <div class="task-info">Info</div>
          <div class="task-due">${due}</div>
          <img class="delete-icon delete-task"
              src="../icons/delete.svg" alt="delete icon">`;
}


// UPDATE TASK CHECK STATE:
const updateCheckState = (projectName, id, checkState) => {
  data[projectName].map(i => {
    if (i.id === id) {
      i.check = checkState;
    }
  });
}


// ADD TASK CARD TO DOM and add contents:
const appendTaskToDOM = (taskObj) => {
  const projectHeader = document.querySelector('.project-header');
  const projectName = projectHeader.innerHTML;
  const taskHTML = createTaskHTML(taskObj);
  const taskList = document.querySelector('.task-list');
  const taskCard = document.createElement('div');
  const checkCircle = document.querySelector('.check-circle');
  const id = taskObj.id;

  taskCard.setAttribute('class', 'task-card');
  taskCard.setAttribute('id', id);
  taskCard.innerHTML = taskHTML;
  taskList.appendChild(taskCard);

  const priorityLevel = taskObj.priority;
  const color = priorityLevel === 'high' ? highColor
    : priorityLevel === 'medium' ? medColor
    : lowColor;
  taskCard.style['background-color'] = color;

  if (taskObj.check) {
    taskCard.style['background-color'] = completedColor;
  }


  // HANDLE CLICK EVENTS FOR TASK CARD:
  taskCard.addEventListener('click', (e)=> {
    const target = e.target;

    // HANDLE INFO DISPLAY ON CLICK
    if (target.classList.contains('task-info')) {
      const display = document.querySelector('.info-display');
      const id = e.path[1].id;

      data[projectName].map(i => {
        if (i.id === id) {
          const visible = display.innerText === '' ? false : true;
          if (!visible) {
            display.innerText = i.info;
            display.innerHTML = `<h4>Info</h4>
                                 <div>${i.info}</div>`;
            display.setAttribute(
              'style', `visibility: visible;margin:auto;width:200px;height:100px;`
            );
            target.style.color = infoOn;
          } else if (visible) {
            display.innerText = '';
            display.setAttribute('style', 'visibility: hidden;');
            target.style.color = infoOff;
          }
        }
      });
    }

  // HANDLE TICK BOX:
    const unChecked = target.classList.contains('check-circle');
    if (unChecked) {
      const id = e.path[2].id;
      target.innerHTML = tickHTML;
      taskCard.style['background-color'] = completedColor;
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
