'use strict'

function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4,5);

const obj = {
    a: 4,
    b: 5,
    sum: function (){
        console.log(this);
    }
}
obj.sum();

function User(name, id){
    this.name = name;
    this.id =id;
    this.human = true;
    this.hello = function (){
        console.log(`Hello ${this.name}`);
    }
}
const ivan = new User('Ivan', 28);


const user = {
    name: 'John'
}

function sayName(surname){
    console.log(this);
    console.log(this.name +' ' + surname);

}
sayName.call(user, 'Smith');
sayName.apply(user,['Smith']);

function count(num){
    return num*this;
}

const double = count.bind(2);
console.log(double(13));

const btn = document.querySelector('.button');
btn.addEventListener('click',function (){
    console.log(this);
})