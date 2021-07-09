const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');
// btn. onclick = function (){
//     alert('Click');
// };

btn.addEventListener('click',function (){
    alert('Click');
});
let i =0;

const q = (e)=>{
    console.log(e.target, e.type);
    i++;
    if(i==1){
        btn.removeEventListener('contextmenu',q);
    }
    // console.log('Hover');
};
btn.addEventListener('click',q);
overlay.addEventListener('click',q);

const link = document.querySelector('a');
link.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
})