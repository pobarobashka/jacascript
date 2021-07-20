
const box = document.querySelector('.box'),
    // width = box.clientWidth,
    // height = box.clientHeight;
    // width = box.offsetWidth,
    // height = box.offsetHeight;
    width = box.scrollWidth,
    height = box.scrollHeight,
    btn = document.querySelector('button');


console.log(width,height);

btn.addEventListener('click',()=>{
    // box.style.height=height+'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style);

document.documentElement.scrollTop = 50;
window.scrollBy(0,400);
window.scrollToBy(0,400);
