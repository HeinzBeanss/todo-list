import {createProject} from "../src/logic"
import {designProject} from "../src/design"



const addProjectButton = document.querySelector("#createproject");
addProjectButton.addEventListener("click", designProject.addProject);

const addtodobutton = document.querySelector(".addtodo");
addtodobutton.addEventListener("click", designProject.designEmptyTodo);

const projectList = document.querySelector(".projectList")

// if (projectList.firstChild === true) {

// } else {

//     const project = createProject.projectFactory("General", true, 0);
//     designProject.allProjects.push(project);

//     const firstproject = document.createElement("h2");
//     firstproject.setAttribute("id", "0");
//     firstproject.classList.add("selected");
//     firstproject.classList.add("selector");
//     firstproject.textContent = "General";
//     projectList.appendChild(firstproject);
// }

// addProjectButton.addEventListener("click", () => {
//     console.log("testing2")
// });


