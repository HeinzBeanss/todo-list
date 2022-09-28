const designProject = (() => {
    
    const declareMaxLength = () => {
        const todotitle = document.querySelectorAll(".todotitle");
        todotitle.forEach(title => {
            title.maxLength = "4";
        })
    }

    const x = 1

    const sidebartop = document.querySelector(".sidebartop");
    const projectList = document.querySelector(".projectList")
    const todolists = document.querySelector(".todolists");
    const savebutton = document.querySelector(".savebutton");
    const addtodobutton = document.querySelector(".addtodo");


    const addProject = () => {
        
        let i = x++
        
        clearAllSelectors();

        const newProjectLabel = document.createElement("h2");
        newProjectLabel.textContent = "New Project";
        newProjectLabel.classList.add("selected");
        newProjectLabel.classList.add("selector");
        projectList.appendChild(newProjectLabel);
        

        // const newProjectInput = document.createElement("input");
        // newProjectInput.classList.add("contentinput");
        // newProjectInput.setAttribute("placeholder", "New Project");
        // todolists.appendChild(newProjectInput);

        savebutton.classList.add("online");
        addtodobutton.classList.add("online");
     
        // Projects.push()

        // console.log(selectors.length);
        // return selectors = document.querySelectorAll(".selector");
    }

    const selectProject = (project) => {
        console.log(project.target);
        console.log(project.target.textContent);
        clearAllSelectors();
        project.target.classList.add("selected");
    }

    projectList.addEventListener("click", selectProject);

    const clearAllSelectors = () => {
        const selected = document.querySelectorAll(".selected");
        selected.forEach(selector => {
            selector.classList.remove("selected");
        })
    }


    

    // const selectElement = (nodeNumber) => {
    //     clearAllSelectors();
        
    // } ^^^ use if function doesnt work, (adding/removing classes)




    return { addProject };

})();

export {designProject};