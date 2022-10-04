import {createProject} from "../src/logic"
import {designProject} from "../src/design"



const addProjectButton = document.querySelector("#createproject");
addProjectButton.addEventListener("click", designProject.addProject);

const addtodobutton = document.querySelector(".addtodo");
addtodobutton.addEventListener("click", designProject.designEmptyTodo);

const project = createProject.projectFactory("General", true, 0);
designProject.allProjects.push(project);
// addProjectButton.addEventListener("click", () => {
//     console.log("testing2")
// });



