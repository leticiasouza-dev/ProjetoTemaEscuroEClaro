'use strict'

const switcher = document.querySelector('.botao');

switcher.addEventListener('click', function() {
    Document.body.classList.toggle('dark-theme')

    var classname = document.body.classname;
    if(classname == "light-theme") {
        this.textContent = "dark";
    }
    else {
        this.textContent = "light";
    }
    console.log('current class name:' + classname)
});