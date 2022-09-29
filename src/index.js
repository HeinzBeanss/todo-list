import {createProject} from "../src/logic"
import {designProject} from "../src/design"

console.log("success.")

const general = createProject.projectFactory("test");
console.log(general);   

// -------------------------------------------------------------------------

const addProjectButton = document.querySelector("#createproject");
addProjectButton.addEventListener("click", designProject.addProject);

const General = createProject.projectFactory("General", true);

const addtodobutton = document.querySelector(".addtodo");
addtodobutton.addEventListener("click", designProject.designTodo);


// addProjectButton.addEventListener("click", () => {
//     console.log("testing2")
// });

