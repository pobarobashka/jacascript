'use strict';

// localStorage.setItem('number',5);
// localStorage.getItem('number');
// localStorage.removeItem('number');
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked') === 'true'){
    checkbox.checked = true;
}

checkbox.addEventListener('change',()=>{
    localStorage.setItem('isChecked', 'true');
})
change.addEventListener('click',()=>{
    if (localStorage.getItem('color')==='red'){
        form.style.backgroundColor = 'white'
        localStorage.removeItem('color')
    }else {
        form.style.backgroundColor = `red`;
        localStorage.setItem('color','red');
    }
})
const persone = {
    name:'Alex',
    age:25
};
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex',serializedPersone);