"use strict"

const soldier = {
    heals: 400,
    armor:100
};

// const jonh = {
//     heals: 100
// };

const jonh = Object.create(soldier);

// Object.setPrototypeOf(jonh,soldier);
// jonh.__proto__=soldier;
console.log(jonh.armor);
