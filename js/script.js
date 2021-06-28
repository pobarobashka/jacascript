"use strict"

function showFirstMessage(text){
    console.log(text);
}

showFirstMessage('Hello world');

function calc(a,b){
    return (a+b);
}

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(6,10));

function ret(){
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function (){
  console.log('Hello');
};

logger();

const calc = (a,b) => {return  a + b};