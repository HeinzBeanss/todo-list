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
