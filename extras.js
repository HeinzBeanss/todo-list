// valdiation for input length - needs work

const declareMaxLength = () => {
    const todotitle = document.querySelectorAll(".todotitle");
    todotitle.forEach(title => {
        title.maxLength = "4";
    })
} 
