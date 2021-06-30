"use strict"
const arr = [1,2,3,5,6,8];
arr.sort(compareNum);

for (let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value);
}

arr.forEach(function (num,i,arr){
    console.log(`${i}: ${num} внутри ${arr}`);
});
// const str = prompt('','');
// const products = str.split(",");
// console.log(products);
// const str = prompt('','');
// const products = str.split(",");
// console.log(products.join(';'));
const str = prompt('','');
const products = str.split(",");
products.sort();
console.log(products.join(';'));


function compareNum(a,b){
    return a-b;
}