"use strict"

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done(){
    console.log('Я прошел урок!');
}

learnJS('JavaScript', done);

const options = {
    name:'test',
    width: 1024,
    height:1024,
    color:{
        border:"black",
        bg: 'red'
    }
};
const {border, bg } = options["color"];

delete  options.name;

console.log(options);

for (let key in options){
    if (typeof(options[key]) ==='object'){
        for (let i in options[key]){
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        }
        }else{
        console.log(`свойство ${key} имеет значение ${options[key]}`);
    }
}
console.log(Object.keys(options).length)