import {createProject} from "../src/logic"
import {designProject} from "../src/design"

console.log("success.")

const general = createProject.projectFactory("test");
console.log(general);   

// -------------------------------------------------------------------------

const addProjectButton = document.querySelector("#createproject");
addProjectButton.addEventListener("click", designProject.addProject);





// addProjectButton.addEventListener("click", () => {
//     console.log("testing2")
// });

