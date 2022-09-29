import {designProject} from "../src/design"

const createProject = (() => {

    const Projects = [];

    

    const projectFactory = (name, selected) => {
        
        return { name, selected};
    }

    const addTodo = (selectedProject) => {
        console.log("cry");
    }
    

    // const general = projectFactory("general");
    // console.log(general.name);

    return { projectFactory, Projects, addTodo };

})();



export {createProject};