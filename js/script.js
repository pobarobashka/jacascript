"use strict"

// const copy = obj;
//
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const number = {
    a: 15,
    b:5,
    c:{
        x:7,
        y:9
    }
};

const newNumber = copy(number);
console.log(newNumber);

function cons(mainObj){
        for(let key in mainObj){
       console.log(mainObj[key]);
    }

}
cons(number);
const add = {
    d:17,
    e:20
};

console.log(Object.assign(number,add));

const oldArr=['a', 'b', 'c'];
const newArr = oldArr.slice();

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet =[...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

const q ={
    one: 1,
    two: 2
};

const newQ = {...q};
console.log(newQ);
