'use strict'

//filter

const names = ['Ivan', 'Ann','Ksenia','Voldemar'],
    shortNames = names.filter(function (name){
        return name.length < 5;
    });
console.log(shortNames);

//map
const answers = ['IvAn','AnnA','Hello'],
    result = answers.map(item => item.toLowerCase() );
console.log(result);

//every/some

const some = [4, 'qwe','dsgfs'];

console.log(some.some(item => typeof(item)==='number')); //есть среди эл-тов число
console.log(some.every(item => typeof(item)==='number'));// все элементы числа

//reduce


// const arr = [4,5,1,3,2,6],
//     res = arr.reduce((sum,current) => sum + current);
const arr = ['Ivan', 'Ann','Ksenia','Voldemar'],
    res = arr.reduce((sum,current) => `${sum}, ${current}`);
console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
}

const newArr = Object.entries(obj).filter(item => item[1]==='person').map(item => item[0]);
console.log(newArr);