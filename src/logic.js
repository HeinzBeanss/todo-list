const createProject = (() => {

    const Projects = [];

    const sidebartop = document.querySelector(".sidebartop");

    const projectFactory = (name, selected) => {

        return { name, selected};
    }

    const testFocus = () => {
        console.log("testFocus activated");
        const textElement = document.createElement("input");
        textElement.classList.add("input");
        textElement.textContent = "test, probs won't work.";
        sidebartop.appendChild(textElement);
        textElement.setAttribute("placeholder", "initial test");

        if (textElement.focus() = true) {
            console.log("element is focused")
        }
        else if (textElement.focus() = false) {
            textElement.setAttribute("placeholder", "updated placeholder")
        }


    }



    const addProject = () => {
        
        const newProjectInput = document.createElement("input");
        newProjectInput.classList.add("input");
        newProjectInput.setAttribute("placeholder", "Unnamed Project");
        sidebartop.appendChild(newProjectInput);

    // Projects.push()

    }

    // const general = projectFactory("general");
    // console.log(general.name);

    return { projectFactory, addProject, Projects, testFocus };

})();



export {createProject};