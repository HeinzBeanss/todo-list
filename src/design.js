import {createProject} from "../src/logic"
const designProject = (() => {

    let selectedProject;
    
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

        savebutton.classList.add("online");
        addtodobutton.classList.add("online");
     
        // Projects.push()

        // console.log(selectors.length);
        // return selectors = document.querySelectorAll(".selector");
    }

    const selectProject = (project) => {
        console.log(project);
        console.log(project.target);
        console.log(project.target.textContent);
        clearAllSelectors();
        project.target.classList.add("selected");
        return selectedProject = project.target;
    }

    projectList.addEventListener("click", selectProject);

    const clearAllSelectors = () => {
        const selected = document.querySelectorAll(".selected");
        selected.forEach(selector => {
            selector.classList.remove("selected");
        })
    }

    const designTodo = () => {
        
        const todocard = document.createElement("div");
        todocard.classList.add("todocard");
        todolists.appendChild(todocard);

        const todotitle = document.createElement("h3");
        todotitle.classList.add("todotitle");
        todotitle.setAttribute("contenteditable", "true");
        todotitle.textContent = "Give your todo a title"
        todocard.appendChild(todotitle);

        const tododesc = document.createElement("p");
        tododesc.classList.add("tododesc");
        tododesc.setAttribute("contenteditable", "true");
        todocard.appendChild(tododesc);

        const radiobuttons = document.createElement("div");
        radiobuttons.classList.add("radiobuttons");
        todocard.appendChild(radiobuttons);
        const priotitle = document.createElement("p");
        priotitle.classList.add("priotitle");
        priotitle.textContent = "Priority:";
        radiobuttons.appendChild(priotitle);
        const todopriolow = document.createElement("input");
        todopriolow.classList.add("todopriolow");
        todopriolow.setAttribute("id","prio");
        todopriolow.setAttribute("name","prio");
        todopriolow.setAttribute("type","radio");
        todopriolow.setAttribute("value","low");
        radiobuttons.appendChild(todopriolow);
        const todopriolowlabel = document.createElement("label");
        todopriolowlabel.textContent = "Low";
        todopriolowlabel.setAttribute("for", "low");
        radiobuttons.appendChild(todopriolowlabel);
        const todopriomedium = document.createElement("input");
        todopriomedium.classList.add("todopriomedium");
        todopriomedium.setAttribute("id","prio");
        todopriomedium.setAttribute("name","prio");
        todopriomedium.setAttribute("type","radio");
        todopriomedium.setAttribute("value","medium");
        radiobuttons.appendChild(todopriomedium);
        const todopriomediumlabel = document.createElement("label");
        todopriomediumlabel.textContent = "Medium";
        todopriomediumlabel.setAttribute("for", "medium");
        radiobuttons.appendChild(todopriomediumlabel);
        const todopriohigh = document.createElement("input");
        todopriohigh.classList.add("todopriohigh");
        todopriohigh.setAttribute("id","prio");
        todopriohigh.setAttribute("name","prio");
        todopriohigh.setAttribute("type","radio");
        todopriohigh.setAttribute("value","high");
        radiobuttons.appendChild(todopriohigh);
        const todopriohighlabel = document.createElement("label");
        todopriohighlabel.textContent = "High";
        todopriohighlabel.setAttribute("for", "high");
        radiobuttons.appendChild(todopriohighlabel);

        const duedate =  document.createElement("div");
        duedate.classList.add("date");
        todocard.appendChild(duedate);
        const datetitlelabel = document.createElement("label");
        datetitlelabel.classList.add("datetitle");
        datetitlelabel.setAttribute("for", "duedate");
        datetitlelabel.textContent = "Due Date:";
        duedate.appendChild(datetitlelabel);
        const datetitle = document.createElement("input");
        datetitle.setAttribute("type", "date");
        datetitle.setAttribute("id", "duedate");
        datetitle.classList.add("tododuedate");
        datetitle.setAttribute("value", "");
        duedate.appendChild(datetitle);

    }

    const clearContent = () => {

    }

    // const selectElement = (nodeNumber) => {
    //     clearAllSelectors();
        
    // } ^^^ use if function doesnt work, (adding/removing classes)




    return { addProject, designTodo};

})();

export {designProject};