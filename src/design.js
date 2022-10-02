import {createProject} from "../src/logic"

const designProject = (() => {

    let allProjects = [];
    let projectTodos = [];
    let selectedProject;
    let selectedTodo;
    let x = 1

    const sidebartop = document.querySelector(".sidebartop");
    const projectList = document.querySelector(".projectList")
    const todolists = document.querySelector(".todolists");
    const savebutton = document.querySelector(".savebutton");
    savebutton.disabled = true;
    const addtodobutton = document.querySelector(".addtodo");
    const deletebutton = document.querySelector(".deletetodo");
    deletebutton.disabled = true;
    const editbutton = document.querySelector(".edittodo");
    editbutton.disabled = true;

  

    // PROJECT FUNCTIONS -----------------------------------------------------------------------

    const addProject = () => {
        
        let i = x++

        allProjects.forEach(projectnumber => {
            projectnumber.selected = false;
        })

        const project = createProject.projectFactory("project" + i, true);
        console.log(project);
        
        allProjects.push(project);

        clearAllSelectors();

        const newProjectLabel = document.createElement("h2");
        newProjectLabel.textContent = "New Project";
        newProjectLabel.classList.add("selected");
        newProjectLabel.classList.add("selector");
        projectList.appendChild(newProjectLabel);

        console.log(allProjects);
    }

    const selectProject = (project) => {
        console.log(project);
        console.log(project.target);
        console.log(project.target.textContent);
        clearAllSelectors();
        project.target.classList.add("selected");
        return selectedProject = project.target;
    }

    const clearAllSelectors = () => {
        const selected = document.querySelectorAll(".selected");
        selected.forEach(selector => {
            selector.classList.remove("selected");
        })
    }

    // TODO FUNCTIONS --------------------------------------------------------------------------

    const saveTodo = () => {
        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                projectnumber.todolists.forEach(todonumber => {
                    if (todonumber.selected === true) {
                        const temptodo = document.querySelector(".selectedtodo");
                        todonumber.title = temptodo.firstChild.textContent; //title input
                        todonumber.description = temptodo.childNodes[1].textContent; //description input

                        const tempradio = temptodo.childNodes[2];
                        for (let i = 0; i < tempradio.length; i++) {
                            if (tempradio[i].checked) {
                                todonumber.priority = tempradio[i].value;
                            }
                        }
                        
                        // work on getting radio buttons back. figure it out.
                        // tempradio[name="prio"]:checked.value
                        // todonumber.priority = temptodo.childNodes[2][name="prio"]:checked.value;

                        // document.querySelector('input[name="rate"]:checked').value;
                        console.log(todonumber);
                    }
                })

                
                // ON TODO SPAWN - AS IN CREATE - 
                // GIVE DEFAULT VALUES TO OBJECTS. PUSH IT IN THE PROJECT'S ARRAY.
                //input
                //add to an array within todolists[]
                //turn off save button. turn back on the edit button?
                //
                console.log("adding this to the database, sir!")
            } else {
            }
        })
    }

    const selectTodo = (todo) => {
        console.log(todo.target);
        clearAllTodoSelectors();

        let test = todo.target.getAttribute("class");
        let test3 = todo.target.parentNode.getAttribute("class");
        console.log(test3);

        if (test === "todolists") {

        }
        else if (test === "todocard") {
            console.log(test);
            todo.target.classList.add("selectedtodo");
            console.log("it's done via child.");
        } else if (test3 === "radiobuttons") {
            let test10 = todo.target;
            let test11 = test10.parentNode;
            test11.parentNode.classList.add("selectedtodo");
            // let test4 = test3.parentNode;
            // test4.classList.add("selectedtodo");
            console.log("a fucking annoying ass radio button element was pressed.")
        } else if (test3 === "date") {
            let test10 = todo.target;
            let test11 = test10.parentNode;
            test11.parentNode.classList.add("selectedtodo");
            // let test4 = test3.parentNode;
            // test4.classList.add("selectedtodo");
            console.log("a fucking annoying ass duedate shit element was pressed.");
            
        } else {
            let test2 = todo.target;
            console.log(todo.target.parentNode);
            test2.parentNode.classList.add("selectedtodo");
            // test2.classList.add("selecteddo");
            console.log("it's done via parent.");
        }
        
        return selectedTodo = todo.target;
    }

    const clearAllTodoSelectors = () => {
        const selectedtodos = document.querySelectorAll(".selectedtodo");
        selectedtodos.forEach(selectedtodo => {
            selectedtodo.classList.remove("selectedtodo");
        })
    }
    
    const clearTodos = () => {
        let todolists = document.querySelector(".todolists");
        let children = todolists.lastElementChild;
        while (children) {
            todolists.removeChild(children);
            children = todolists.lastElementChild;
        }
    }

    const displayProjectsTodos = (project) => {

    }

    const registerTodo = () => {

    }

    const designEmptyTodo = () => {

        clearAllTodoSelectors();

        addtodobutton.disabled = true;
        addtodobutton.classList.remove("online");
        addtodobutton.classList.add("offline");

        deletebutton.disabled = false;
        deletebutton.classList.remove("offline");
        deletebutton.classList.add("online");
        editbutton.disabled = false;
        editbutton.classList.remove("offline");
        editbutton.classList.add("online");
        savebutton.disabled = false;
        savebutton.classList.remove("offline");
        savebutton.classList.add("online");
        

        // let i = x++; 
        
        const todocard = document.createElement("div");
        todocard.classList.add("todocard");
        todocard.classList.add("selectedtodo");
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

        const date = document.createElement("div");
        date.classList.add("date");
        todocard.appendChild(date);

        const datelabel = document.createElement("label");
        datelabel.classList.add("datelabel");
        datelabel.setAttribute("for", "duedate");
        datelabel.textContent = "Due: "
        date.appendChild(datelabel);

        const duedate = document.createElement("p");
        duedate.classList.add("duedate");
        duedate.setAttribute("contenteditable", "true");
        date.appendChild(duedate);

        // unneeded, using textbox
        // const duedate =  document.createElement("div");
        // duedate.classList.add("date");
        // todocard.appendChild(duedate);
        // const datetitlelabel = document.createElement("label");
        // datetitlelabel.classList.add("datetitle");
        // datetitlelabel.setAttribute("for", "duedate");
        // datetitlelabel.textContent = "Due Date:";
        // duedate.appendChild(datetitlelabel);
        // const datetitle = document.createElement("input");
        // datetitle.setAttribute("type", "date");
        // datetitle.setAttribute("id", "duedate");
        // datetitle.classList.add("tododuedate");
        // // datetitle.setAttribute("value", "");
        // duedate.appendChild(datetitle);

        const todolist = createProject.todoFactory("", "", "", "", true);

        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                projectnumber.todolists.push(todolist);
                console.log(projectnumber.todolists);
            }
        })
    }

    

    // EVENTLISTENERS

    projectList.addEventListener("click", selectProject);
    todolists.addEventListener("click", selectTodo);
    savebutton.addEventListener("click", saveTodo);

    return { addProject, designEmptyTodo, allProjects};

})();

export {designProject};