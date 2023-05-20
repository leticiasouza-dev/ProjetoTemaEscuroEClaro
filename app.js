'use strict'

let switcher = document.querySelector('#botao');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var classname = document.body.classname;
    if(classname == "light-theme") {
        this.textContent = "dark";
    }
    else {
        this.textContent = "light";
    }
    console.log('current class name:' + classname)
});