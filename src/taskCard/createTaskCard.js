// CONSTRUCT TASK CARD HTML CONTENT:
const createTaskCard = (taskObj) => {
  const check = taskObj.check;
  const name = taskObj.name;
  const due = taskObj.due;
  const id = taskObj.id;

  // Main taskCard element
  const taskCard = document.createElement("div");
  taskCard.setAttribute("class", "task-card");
  taskCard.setAttribute("id", id);

  // Check box and innercircle
  const checkBoxElem = document.createElement("div");
  checkBoxElem.setAttribute("class", "check-box");
  const checkBoxInnerCircle = document.createElement("div");
  checkBoxInnerCircle.setAttribute("class", "check-circle");
  checkBoxElem.appendChild(checkBoxInnerCircle);

  if (check) {
    // Tick icon image added if check is true
    const tickIconImg = document.createElement("img");
    tickIconImg.setAttribute("class", "tick-img");
    tickIconImg.setAttribute("src", "../src/icons/tick.svg");
    tickIconImg.setAttribute("alt", "tick icon");
    checkBoxInnerCircle.appendChild(tickIconImg);
  }

  // Create the other elements for the card
  const taskNameH5 = document.createElement("h5");
  taskNameH5.setAttribute("class", "task-name");
  taskNameH5.innerText = name;

  const taskInfoDiv = document.createElement("div");
  taskInfoDiv.setAttribute("class", "task-info");
  taskInfoDiv.innerText = "INFO";

  const taskDueDiv = document.createElement("div");
  taskDueDiv.setAttribute("class", "task-due");
  taskDueDiv.innerText = due;

  const deleteIconImg = document.createElement("img");
  deleteIconImg.setAttribute("src", "../src/icons/delete.svg");
  deleteIconImg.setAttribute("alt", "delete icon");
  // Can two classes be added like this ????
  deleteIconImg.setAttribute("class", "delete-icon delete-task");

  // Append all the elements to the taskCard
  taskCard.appendChild(checkBoxElem);
  taskCard.appendChild(taskNameH5);
  taskCard.appendChild(taskInfoDiv);
  taskCard.appendChild(taskDueDiv);
  taskCard.appendChild(deleteIconImg);

  return taskCard;
};

export { createTaskCard };
