// import { data } from './data.js';
//
// let currentProject = 'General';
//

//

//
// // Add new project to DOM and data
// const appendProjectToDom = (name) => {
//   const projectList = document.querySelector('.project-list');
//   const newProject = document.createElement('li');
//   projectList.appendChild(newProject);
//
//   newProject.innerHTML = `<div class="project-name">${name}</div>
//                           <img class="delete-icon delete-project" src="../icons/delete.svg">`;
//
// // ========= EVENTs to select project ================
//   const selectProject = (e) => {
//     console.log({currentProject});
//     console.log({click: e.target.innerText});
//     if (currentProject == e.target.innerText) {
//       console.log('Project already selected');
//     } else {
//       currentProject = e.target.innerText;
//
//       const taskList = document.querySelector('.task-list');
//       console.log({taskList});
//       taskList.replaceChildren();
//       console.log({taskList});
//
//     // BUGGY LOGIC - renders duplicates of tasks:
//       const taskArray = data[currentProject];
//       console.log({taskArray});
//       if(taskArray) {
//         taskArray.forEach(i => {
//           console.log({i});
//           const taskHTML = taskContent(i);
//           console.log({taskHTML});
//           appendTaskToDOM(taskHTML);
//         });
//       }
//     }
//   }
//   // Add project select events
//   const projectName = document.querySelectorAll('.project-name');
//   projectName.forEach(i => {
//     i.removeEventListener('click', selectProject);
//     i.addEventListener('click', selectProject);
//   });
// // ==== end of project select ========
//
//   // Delete projects
//   const projectToDelete = document.querySelectorAll('.delete-project');
//
//   const deleteProject = (e) => {
//     const sure = prompt('You will lose all tasks in this project. Are you sure?');
//     if (sure && sure.toLowerCase() === 'yes') {
//       const element = e.target.parentElement;
//       const project = element.children[0].innerText;
//       element.remove();
//
//       // REMOVE FROM DATA STRUCTURE should go here:
//       // delete data[project];
//     }
//   }
//   projectToDelete.forEach(i => {
//     i.removeEventListener('click', deleteProject);
//     i.addEventListener('click', deleteProject);
//   });
//
//   // Add new project to data:
//   data.name = name;
// }
//
//
//
// export { appendProjectToDom, taskContent, appendTaskToDOM };
