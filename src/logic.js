const createProject = (() => {

    const sidebartop = document.querySelector(".sidebartop");

    const projectFactory = (name, selected) => {

        return { name, selected};
    }

    const addProject = () => {
    
    const newProjectInput = document.createElement("input");
    newProjectInput.classList.add("input");
    newProjectInput.setAttribute("placeholder", "Buying food");
    sidebartop.appendChild(newProjectInput);

    }

    // const general = projectFactory("general");
    // console.log(general.name);

    return { projectFactory, addProject };

})();



export {createProject};