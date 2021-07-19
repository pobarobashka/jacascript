const btn = document.querySelector('.btn');
let timerId,
    i = 0;
// btn.addEventListener('click',()=>{
//     timerId = setInterval(function (text){
//         console.log(text);
//         i++;
//         if (i===4){
//             clearInterval(timerId);
//
//         }
//     },2000,'Hello');
//     // const time = setInterval(logger,2000);
//
// })
// const timer = setTimeout(logger,2000);
// function logger(){
//     console.log('text');
// }
function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame,10);
    function frame(){
        if (pos===300){
            clearInterval(id);
        }
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos +'px';
    }
}
btn.addEventListener('click',myAnimation);