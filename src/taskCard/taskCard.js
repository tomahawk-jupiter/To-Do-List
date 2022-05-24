import { data } from "../data.js";
import { createTaskCard } from "./createTaskCard.js";

// Colors for priority level
const lowColor = "#96d0db";
const medColor = "#49a8c7";
const highColor = "#118cd9";
const completedColor = "#25ce47";

// Info button colors
const infoOn = "orange";
const infoOff = "black";

// UPDATE TASK TICK STATE:
// Update task tick state
const updateCheckState = (projectName, id, checkState) => {
  data[projectName].map((i) => {
    if (i.id === id) {
      i.check = checkState;
    }
  });
};

// ADD TASK CARD TO DOM
// This is used to display a projects tasks when changing between them
// and when a new task is added with the form.
const appendTaskToDOM = (taskObj) => {
  const projectHeader = document.querySelector(".project-header");
  const projectName = projectHeader.innerText;

  // Use the imported createTaskCard function
  const taskCard = createTaskCard(taskObj);

  const taskList = document.querySelector(".task-list");
  taskList.appendChild(taskCard);

  // SET THE COLORS FOR THE CARDS
  // based on priority level or if completed.
  const priorityLevel = taskObj.priority;
  const color =
    priorityLevel === "high"
      ? highColor
      : priorityLevel === "medium"
      ? medColor
      : lowColor;
  taskCard.style["background-color"] = color;

  if (taskObj.check) {
    taskCard.style["background-color"] = completedColor;
  }

  // !!!!! GETS A BIT TOO NESTED !!!!!! //

  // ADD EVENT LISTENERS TO TASK CARD
  // and define the handler functions.
  taskCard.addEventListener("click", (e) => {
    const target = e.target;

    // Handle info display on click
    if (target.classList.contains("task-info")) {
      const display = document.querySelector(".info-display");
      const id = e.composedPath()[1].id;

      data[projectName].map((i) => {
        if (i.id === id) {
          if (display.style.visibility !== "visible") {
            display.style.visibility = "visible";
            display.replaceChildren();

            const infoH4 = document.createElement("h4");
            infoH4.innerText = i.name;

            const infoDiv = document.createElement("div");
            infoDiv.innerText = i.info;

            const infoCloseBtn = document.createElement("button");
            infoCloseBtn.setAttribute("class", "close-info");
            infoCloseBtn.innerText = "Close";

            display.appendChild(infoH4);
            display.appendChild(infoDiv);
            display.appendChild(infoCloseBtn);

            target.style.color = infoOn;

            const closeInfo = document.querySelector(".close-info");

            closeInfo.addEventListener("click", () => {
              display.style.visibility = "hidden";
              target.style.color = infoOff;
            });
          } else {
            display.style.visibility = "hidden";
            target.style.color = infoOff;
          }
        }
      });
    }

    // Handle tick box
    const unChecked = target.classList.contains("check-circle");
    if (unChecked) {
      const id = e.composedPath()[2].id;

      const tickIconImg = document.createElement("img");
      tickIconImg.setAttribute("class", "tick-img");
      tickIconImg.setAttribute("src", "../src/icons/tick.svg");
      tickIconImg.setAttribute("alt", "tick icon");

      target.appendChild(tickIconImg);
      taskCard.style["background-color"] = completedColor;
      updateCheckState(projectName, id, true);
    } else if (target.classList.contains("tick-img")) {
      const id = e.composedPath()[3].id;
      target.remove();
      taskCard.style["background-color"] = color;
      updateCheckState(projectName, id, false);
    }

    // HANDLE REMOVE TASKS
    if (target.classList.contains("delete-task")) {
      const taskCard = e.target.parentElement;
      const id = taskCard.id;
      taskCard.remove();

      // REMOVE TASK FROM DATA STRUCTURE
      data[projectName].map((task, index) => {
        if (task.id === id) {
          data[projectName].splice(index, 1);
          console.log(data[projectName]);
        }
      });
    }
  }); // addEventListener end
};

export { appendTaskToDOM };
