import {designProject} from "../src/design"

const createProject = (() => {

    const Projects = [];

    

    const projectFactory = (name, selected, id) => {
        
        const todolists = [];
        
        return { name, selected, todolists, id};
    }

    const todoFactory = (title, description, priority, duedate, selected, id) => {

        let deleted = false;
        
        return { title, description, priority, duedate, selected, id, deleted};
    }


    // const addTodo = (selectedProject) => {
    //     console.log("cry");
    // }


    return { projectFactory, Projects, todoFactory };

})();



export {createProject};