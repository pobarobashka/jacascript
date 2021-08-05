'use strict';

const persone = {
    name: 'Alex',
    age: 25,

    get userAge(){
        return this.age;
    },
    set userAge(num){
        this.age = num;
    }
};
console.log(persone.userAge = 30);
console.log(persone.userAge);

class User{
    constructor(name,age){
        this.name = name;
        this._age = age;
    }
    #surname = 'Khanenia';
    say = ()=>{
        console.log(`Имя пользователя : ${this.name} ${this.#surname}, возраст ${this._age}`);
    }
    get surname(){
        return this.#surname;
    }
    set surname(surname){
        this.#surname = surname;
    }
    get age(){
        return this._age;
    }
    set age(age){
        if (typeof age === 'number' && age >0 && age < 110){
            this._age = age;
        }else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User('Ivan',27);
/*console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.setAge(300);
ivan.name = 'Alex';
console.log(ivan.getAge());*/
// console.log(ivan.age);
// ivan.age = 99;
console.log(ivan.surname);
ivan.surname = 'Petrichenko';

ivan.say();