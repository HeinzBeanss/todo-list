import {createProject} from "../src/logic"

const designProject = (() => 

{

    
    let allProjects = [];
    let projectTodos = [];
    let y = 0;
    let x = 1;

    const sidebartop = document.querySelector(".sidebartop");
    const projectList = document.querySelector(".projectList")
    const todolists = document.querySelector(".todolists");
    const savebutton = document.querySelector(".savebutton");
    savebutton.disabled = true;
    const addtodobutton = document.querySelector(".addtodo");
    addtodobutton.disabled = true;
    const deletebutton = document.querySelector(".deletetodo");
    deletebutton.disabled = true;
    const editbutton = document.querySelector(".edittodo");
    editbutton.disabled = true;
    const delprojectbutton = document.querySelector("#deleteproject");
    const editprojectbutton = document.querySelector("#editproject");

    // const save = document.querySelector("#save");
    // const upload = document.querySelector("#upload");
    
    // if (projectList.firstChild === true) {

    // } else {

    //     const project = createProject.projectFactory("General", true, 0);
    //     designProject.allProjects.push(project);

    //     const firstproject = document.createElement("h2");
    //     firstproject.setAttribute("id", "0");
    //     firstproject.classList.add("selected");
    //     firstproject.classList.add("selector");
    //     firstproject.textContent = "General";
    //     projectList.appendChild(firstproject);
    // }
   


    // PROJECT FUNCTIONS -----------------------------------------------------------------------

    const displayProjects = () => {

        allProjects.forEach(projectnumber => {

            if (projectnumber.deleted === false) {

                const newProjectLabel = document.createElement("h2");
                newProjectLabel.textContent = projectnumber.name;
                newProjectLabel.classList.add("selector");
                newProjectLabel.setAttribute("id", projectnumber.id);
                projectList.appendChild(newProjectLabel);

            }
        }) 
    }

    const deleteProject = () => {

        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true){
               
                const temptodolists = document.querySelector(".todolists");
                let children = temptodolists.lastElementChild;
                while (children) {
                    temptodolists.removeChild(children);
                    children = temptodolists.lastElementChild;
                }

                const temptitle = document.querySelector("#ptitle");
                temptitle.textContent = "Select a project";
                
                const tempprojects = document.querySelector(".projectList");
                let projectchildren = tempprojects.lastElementChild;
                while (projectchildren) {
                    tempprojects.removeChild(projectchildren);
                    projectchildren = tempprojects.lastElementChild;
                }

                projectnumber.selected = false;
                projectnumber.deleted = true;

                displayProjects();
            }
        })
    }

    const addProject = () => {

        clearAllTodos();
        clearAllSelectors();
        

        let i = y++

        allProjects.forEach(projectnumber => {
            projectnumber.selected = false;
        })

        const project = createProject.projectFactory("New Project", true, i);
        console.log(project);
        
        allProjects.push(project);

        const newProjectLabel = document.createElement("h2");
        newProjectLabel.textContent = "New Project";
        newProjectLabel.classList.add("selected");
        newProjectLabel.classList.add("selector");
        newProjectLabel.setAttribute("id", i);
        projectList.appendChild(newProjectLabel);
        console.log(allProjects);

        const temptitle = document.querySelector("#ptitle");
        temptitle.textContent = "New Project";

        addtodobutton.disabled = false;
        addtodobutton.classList.add("online");
        addtodobutton.classList.remove("offline");
        editbutton.disabled = true;
        editbutton.classList.add("offline");
        editbutton.classList.remove("online");
        deletebutton.disabled = true;
        deletebutton.classList.add("offline");
        deletebutton.classList.remove("online");
        savebutton.disabled = true;
        savebutton.classList.add("offline");
        savebutton.classList.remove("online");


    }

    const selectProject = (project) => {

        clearAllSelectors();
        clearAllTodoSelectors();
        project.target.classList.add("selected");

        console.log(project.target)
        console.log(allProjects);

        let projectid = project.target.getAttribute("id");
        
        console.log(projectid);

        allProjects.forEach(projectnumber => {
            if (projectnumber.id == projectid) {
                projectnumber.selected = true;

                displayProjectsTodos();
            }
        })

    }

    const clearAllSelectors = () => {
        const selected = document.querySelectorAll(".selected");
        selected.forEach(selector => {
            selector.classList.remove("selected");
        })

        allProjects.forEach(projectnumber => {
            projectnumber.selected = false;
        })
    }

    // TODO FUNCTIONS --------------------------------------------------------------------------

    const editTodo = () => {

        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                const tempprojecttitle = document.querySelector("#ptitle");
                tempprojecttitle.setAttribute("contenteditable", true);

                projectnumber.todolists.forEach(todonumber => {
                    if (todonumber.selected === true) {

                        addtodobutton.disabled = true;
                        addtodobutton.classList.remove("online");
                        addtodobutton.classList.add("offline");

                        savebutton.disabled = false;
                        savebutton.classList.add("online");
                        savebutton.classList.remove("offline");

                        projectList.disabled = true;
                        todolists.disabled = true;

                        const temptodo = document.querySelector(".selectedtodo");
                        temptodo.firstChild.setAttribute("contenteditable", "true");
                        temptodo.childNodes[1].setAttribute("contenteditable", "true");
                        const tempradiobuttons = temptodo.querySelectorAll("input");
                        tempradiobuttons.forEach(radiobutton => {
                        radiobutton.removeAttribute("disabled");
                        });
                        const tempduedate = temptodo.querySelector(".duedate");
                        tempduedate.setAttribute("contenteditable", "true");
                     
                        
                    }
                })
            }
        })

    }

    const saveTodo = () => {
        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {


                const tempprojecttitle = document.querySelector("#ptitle");
                projectnumber.name = tempprojecttitle.textContent;
                const tempprojectsidebar = document.querySelector(".selected");
                tempprojectsidebar.textContent = projectnumber.name;
                tempprojecttitle.setAttribute("contenteditable", "false");

                projectnumber.todolists.forEach(todonumber => {
                    if (todonumber.selected === true) {

                        const temptitles = document.querySelectorAll(".todotitle");
                        temptitles.forEach(temptitle => {
                            temptitle.setAttribute("contenteditable", "false");
                        })
                        const tempdescs = document.querySelectorAll(".tododesc");
                        tempdescs.forEach(tempdesc => {
                            tempdesc.setAttribute("contenteditable", "false");
                        })
                        const tempradio = document.querySelectorAll("input");
                        tempradio.forEach(radio => {
                            radio.setAttribute("disabled", "");
                        })
                        const tempdate = document.querySelectorAll(".date");
                        tempdate.forEach(date => {
                            date.setAttribute("contenteditable", "false");
                        })

                        const temptodo = document.querySelector(".selectedtodo");
                        todonumber.title = temptodo.firstChild.textContent; //title input
                        todonumber.description = temptodo.childNodes[1].textContent; //description input

                        for (let i = 0; i < temptodo.childNodes[2].childNodes.length; i++) {
                            if (temptodo.childNodes[2].childNodes[i].checked) {
                                console.log(temptodo.childNodes[2].childNodes[i])
                                todonumber.priority = temptodo.childNodes[2].childNodes[i].value;
                                temptodo.childNodes[2].childNodes[i].removeAttribute("disabled", "");
                            }
                        }

                        todonumber.duedate = temptodo.childNodes[3].childNodes[1].textContent;
                        console.log(todonumber);

                       
                    }
                })
                
                savebutton.disabled = true;
                savebutton.classList.remove("online");
                savebutton.classList.add("offline");

                addtodobutton.disabled = false;
                addtodobutton.classList.add("online");
                addtodobutton.classList.remove("offline");

                editbutton.disabled = false;
                editbutton.classList.add("online");
                editbutton.classList.remove("offline");
                }
        })

        populateStorage;
    }

    const selectTodo = (todo) => {
        console.log(todo.target);

        // saveTodo(); // LOOK INTO
        clearAllTodoSelectors();

        // make sure here, that whatever todolist was selected, gets reselected.
        // could use another object - id - have it like todolist + i. 
        // so each todolist has a unique id corresponding to the position in the array
        // then when selecting them - search the todolists, whichever is child node is selected, aka
        // card1 or card2, ie. if card[i] === todolist.id {todolist.selected = true} type thing. 

        let nodetest = todo.target;
        let test = nodetest.getAttribute("class");
        let testid = nodetest.getAttribute("id");
        let nodetest3 = todo.target.parentNode;
        let test3 = nodetest3.getAttribute("class");
        let test3id = nodetest3.getAttribute("id");
        let nodetest4 = nodetest3.parentNode;
        let test4 = nodetest4.getAttribute("class");
        let test4id = nodetest4.getAttribute("id");


        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {
                projectnumber.todolists.forEach(todolistnumber => {
                    if (todolistnumber.id == testid || todolistnumber.id == test3id || todolistnumber.id == test4id) {
                        todolistnumber.selected = true;
                    }
                })
            }
        })

        console.log(allProjects);

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

        editbutton.disabled = false;
        editbutton.classList.add("online");
        editbutton.classList.remove("offline");
        deletebutton.disabled = false;
        deletebutton.classList.add("online");
        deletebutton.classList.remove("offline");
        
    }

    const clearAllTodoSelectors = () => {

        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                projectnumber.todolists.forEach(todonumber => {
                    todonumber.selected = false;
                })
            }
        })

        const selectedtodos = document.querySelectorAll(".selectedtodo");
        selectedtodos.forEach(selectedtodo => {
            selectedtodo.classList.remove("selectedtodo");
        })
    }
    

    const clearAllTodos = () => {
        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                projectnumber.todolists.forEach(todonumber => {
                    todonumber.selected = false;
                
                    }
                )
            }
        })
        // this makes all the todos in the project selected = false. ok.

        let children = todolists.lastElementChild;
        while (children) {
        todolists.removeChild(children);
        children = todolists.lastElementChild;
        }
    }

    const designEmptyTodo = () => {

        clearAllTodoSelectors();

        addtodobutton.disabled = true;
        addtodobutton.classList.remove("online");
        addtodobutton.classList.add("offline");

        deletebutton.disabled = false;
        deletebutton.classList.remove("offline");
        deletebutton.classList.add("online");
        // editbutton.disabled = false;
        // editbutton.classList.remove("offline");
        // editbutton.classList.add("online");
        savebutton.disabled = false;
        savebutton.classList.remove("offline");
        savebutton.classList.add("online");
        
        const tempprojecttitle = document.querySelector("#ptitle");
        tempprojecttitle.setAttribute("contenteditable", true);

        let cardnumber = x++; 
        
        const todocard = document.createElement("div");
        todocard.classList.add("todocard");
        todocard.classList.add("selectedtodo");
        todocard.setAttribute("id",cardnumber);
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

        const todolist = createProject.todoFactory("", "", "", "", true, cardnumber);

        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                projectnumber.todolists.push(todolist);
                console.log(projectnumber.todolists);
            }
        })
    }

    const displayProjectsTodos = () => {

        clearAllTodos();

        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                if (projectnumber.deleted === false) {

                    const temptitle = document.querySelector("#ptitle");
                    temptitle.textContent = projectnumber.name;
            
                    projectnumber.todolists.forEach(todolist => {

                        if (todolist.deleted === false) {
                    
                    const todocard = document.createElement("div");
                    todocard.classList.add("todocard");
                    // todocard.classList.add("selectedtodo");
                    todocard.setAttribute("id", todolist.id);
                    todolists.appendChild(todocard);
            
                    const todotitle = document.createElement("h3");
                    todotitle.classList.add("todotitle");
                    todotitle.setAttribute("contenteditable", "false");
                    todotitle.textContent = todolist.title
                    todocard.appendChild(todotitle);
            
                    const tododesc = document.createElement("p");
                    tododesc.classList.add("tododesc");
                    tododesc.setAttribute("contenteditable", "false");
                    tododesc.textContent = todolist.description;
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

                    if (todolist.priority === "low") {
                        todopriolow.setAttribute("checked", "");
                        todopriomedium.setAttribute("disabled", "");
                        todopriohigh.setAttribute("disabled", "");
                    } else if (todolist.priority === "medium") {
                        todopriomedium.setAttribute("checked", "");
                        todopriolow.setAttribute("disabled", "");
                        todopriohigh.setAttribute("disabled", "");
                    } else if (todolist.priority === "high") {
                        todopriolow.setAttribute("disabled", "");
                        todopriomedium.setAttribute("disabled", "");
                        todopriohigh.setAttribute("checked", "");
                    } else {
                    }

                    // todopriolow.setAttribute("disabled", "");
                    // todopriomedium.setAttribute("disabled", "");
                    // todopriohigh.setAttribute("disabled", "");
            
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
                    duedate.setAttribute("contenteditable", "false");
                    duedate.textContent = todolist.duedate;
                    date.appendChild(duedate);
                }

                })
            }
            }
        })

    }

    const deleteTodo = () => {
        allProjects.forEach(projectnumber => {
            if (projectnumber.selected === true) {

                projectnumber.todolists.forEach(todonumber => {
                    if (todonumber.selected === true) {
                        const temptodo = document.querySelector(".selectedtodo");
                        temptodo.remove();
                        todonumber.deleted = true;

                        // not splicing! projectnumber.todolists.Splice(todonumber.id)

                        console.log(todonumber);

                        addtodobutton.disabled = false;
                        addtodobutton.classList.add("online");
                        addtodobutton.classList.remove("offline");
                        savebutton.disabled = false;
                        savebutton.classList.add("offline");
                        savebutton.classList.remove("online");
                    }
                })
            }
        })

        deletebutton.disabled = true;
        deletebutton.classList.add("offline");
        deletebutton.classList.remove("online");
        // editbutton.disabled = true;
        // editbutton.classList.remove("online");
        // editbutton.classList.add("offline");
    }

    // SAVING JSON -------------------------------------------

      const populateStorage = () => {
        localStorage.setItem("allprojects", JSON.stringify(allProjects));
        console.log(localStorage);
    }

    const uploadStorage = () => {
        console.log(localStorage)
        allProjects = JSON.parse(localStorage.getItem("allprojects"));
        console.log(localStorage);

        displayProjects();
    }

    if (!localStorage.getItem("allprojects")) {
        
    } else {
        uploadStorage();
    }
    

    // console.log(localStorage);
    // localStorage.removeItem("allprojects");
    // console.log(localStorage);

    // if (!localStorage.getItem("allprojects")) {
    //     populateStorage();
    //     } else {
    //     setStyles();
    //     }
    


    // EVENTLISTENERS

    projectList.addEventListener("click", selectProject);
    todolists.addEventListener("click", selectTodo);
    savebutton.addEventListener("click", saveTodo);
    deletebutton.addEventListener("click", deleteTodo);
    editbutton.addEventListener("click", editTodo);
    delprojectbutton.addEventListener("click", deleteProject);
    // editprojectbutton.addEventListener("click", editProject);
    save.addEventListener("click", populateStorage);
    // upload.addEventListener("click", uploadStorage);

    return { addProject, designEmptyTodo, allProjects};

 
})();

export {designProject};