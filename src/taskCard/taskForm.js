import { format } from "date-fns";
import { factory } from "../factory";
import { data } from "../data";
import { appendTaskToDOM } from "./taskCard";

const taskFormModule = () => {
  // TASK ADDING FORM AND SUBMIT:
  const projectHeader = document.querySelector(".project-header");
  const addTaskBtn = document.querySelector("#add-task-btn");
  const taskForm = document.querySelector(".task-form");
  const submitTaskBtn = document.querySelector("#submit-task-form");
  const closeTaskBtn = document.querySelector("#close-task-form");
  const nameInput = document.querySelector("#task-name");

  // Form placeholders set dynamically //
  const day = document.querySelector("#day-due");
  const month = document.querySelector("#month-due");
  const year = document.querySelector("#year-due");

  addTaskBtn.addEventListener("click", () => {
    const today = new Date();

    // SET DATE INPUT PLACEHOLDER AND DEFAULT VALUE TO PLUS 1 WEEK
    const oneWeekFromNow = new Date(today.setDate(today.getDate() + 7));

    const dateInOneWeek = oneWeekFromNow.getDate();
    const monthInOneWeek = oneWeekFromNow.getMonth() + 1;
    const yearInOneWeek = oneWeekFromNow.getFullYear();

    day.setAttribute("placeholder", dateInOneWeek);
    month.setAttribute("placeholder", monthInOneWeek);
    year.setAttribute("placeholder", yearInOneWeek);

    day.setAttribute("value", dateInOneWeek);
    month.setAttribute("value", monthInOneWeek);
    year.setAttribute("value", yearInOneWeek);

    taskForm.style.visibility = "visible";
    taskForm.reset();
    nameInput.focus();
  });

  closeTaskBtn.addEventListener("click", () => {
    taskForm.style.visibility = "hidden";
  });

  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector("#task-name").value;
    const info = document.querySelector("#task-info").value;
    const day = document.querySelector("#day-due").value;
    const month = document.querySelector("#month-due").value;
    const year = document.querySelector("#year-due").value;
    console.log({ day });
    const priority = document.querySelector("#task-priority").value;

    if (!name) {
      alert("Please give the task a name.");
    } else {
      // DEAL WITH Date
      // Deal with invalid dates:
      // Doesn't flag days with less than 31
      if (day < 1 || day > 31) {
        alert("Invalid Day");
      } else if (month < 1 || month > 12) {
        alert("Invalid Month");
      } else if (year < new Date().getFullYear()) {
        alert("Deadline passed already!");
      }

      const formattedDate = format(
        new Date(year, month - 1, day),
        "EEE do LLL yy"
      );
      const taskObj = factory(name, info, formattedDate, priority);

      // Add task to project in data structure:
      const projectName = projectHeader.innerText;
      data[projectName].push(taskObj);

      appendTaskToDOM(taskObj);
      taskForm.style.visibility = "hidden";
    }
  }); // end of task form display and submit.
};

export { taskFormModule };
