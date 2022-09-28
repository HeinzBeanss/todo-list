const createProject = (() => {

    const Projects = [];

    

    const projectFactory = (name, selected) => {

        return { name, selected};
    }

    

    // const general = projectFactory("general");
    // console.log(general.name);

    return { projectFactory, Projects };

})();



export {createProject};