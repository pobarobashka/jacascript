'use strict'

/*
console.log('Запрос данных...');
 new Promise(function (resolve,reject){
    setTimeout(function (){
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
        reject();
    },2000);
}).then(data=>{
    data.status = 'order';
    console.log(data);
    return data;
}).then(product =>{
    product.modyfy = 'true';
    return product;
}).then(data =>{
    console.log(data);
}).catch(function (){
    console.error('ошибка ошибка ошибка ');
 }).finally(function (){
     console.log('finally');
 });
*/

const test = function (time){
    return new Promise(resolve => {
        setTimeout(function (){resolve()},time);
    });
};
// test(2000).then(function (){console.log('1000ms');});
// test(1000).then(function (){console.log('2000ms');});
Promise.all([test(1000)],test(2000)).then(function (){
    console.log('All');
});
Promise.race([test(1000)],test(2000)).then(function (){
    console.log('All');
});