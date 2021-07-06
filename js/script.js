'use strict';

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '300px';

box.style.cssText = 'background-color:blue; width:500px'
buttons[1].style.borderRadius = '20px';

/*for (let i=0;i<hearts.length;i++){
    hearts[i].style.backgroundColor = 'blue';
}*/

hearts.forEach(item=>{
    item.style.backgroundColor = 'blue';
})

const div = document.createElement('div');
// const  text = document.createTextNode('Тут был я');

div.classList.add('black');



// wrapper.prepend(div);
wrapper.append(div);
// wrapper.appendChild(div);
// hearts[0].before(div);
// hearts[1].after(div);
// wrapper.insertBefore(div,hearts[0]);
// circles[1].remove();
// wrapper.removeChild(hearts[1]);
// hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0],hearts[1]);

// div.innerHTML= '<h1>Hello world</h1>';

// div.textContent = 'hello!';

div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');