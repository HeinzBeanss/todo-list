// valdiation for input length - needs work

const declareMaxLength = () => {
    const todotitle = document.querySelectorAll(".todotitle");
    todotitle.forEach(title => {
        title.maxLength = "4";
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

todopriolow.setAttribute("disabled", "");





    // const populateStorage = () => {
    //     localStorage.setItem("allprojects", allProjects);
    //     setStyles();
    // }

    // const setStyles = () => {

    //     let currentProjects = localStorage.getItem("allprojects");
    //     return allProjects = currentProjects;
    //     console.log(allProjects);

    //     let test = localStorage.getItem("testString");
    //     testString = test;
    // }
    
    // // // allProjects.onchange = populateStorage;
    // // console.log(testString);

    // if (!localStorage.getItem("allprojects")) {
    //     populateStorage();
    //     } else {
    //     setStyles();
    //     }