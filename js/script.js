"use strict"

const str = 'teSt',
      arr = [1,2,4],
      logg = 'Hello world';
let fruit = 'Some fruit';

console.log(str.length);
console.log(str[2]);
console.log(str.toLowerCase())
console.log(str.toUpperCase());
console.log(str);

console.log(fruit.indexOf('fruit'));
console.log(logg.slice(6, 11));
console.log(logg.substring(6,11));
console.log(logg.substr(6,5));

const num = 12.2;
console.log(Math.round(num));
const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));