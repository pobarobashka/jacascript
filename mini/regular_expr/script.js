'use strict';

// new RegExp('patern','flags');
// /pattern/flags;

const ans = prompt('введите ваше имя');

const reg = /n/gi;

console.log(reg.test(ans));

// \d \w \s

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/./g,'*'));
console.log('12-34-56'.replace(/\-/g,':'));


