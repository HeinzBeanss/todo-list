import {designProject} from "../src/design"

const createProject = (() => {

    const Projects = [];

    

    const projectFactory = (name, selected) => {
        
        const todolists = [];
        
        return { name, selected, todolists};
    }

    const todoFactory = (title, description, priority, duedate, selected) => {

        return { title, description, priority, duedate, selected };
    }


    // const addTodo = (selectedProject) => {
    //     console.log("cry");
    // }


    return { projectFactory, Projects, todoFactory };

})();



export {createProject};