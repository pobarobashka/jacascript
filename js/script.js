/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const b = document.querySelectorAll('.promo__adv img');
b.forEach(item =>{
    item.remove();
})
// document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.background = 'url("../img/bg.jpg") center center/cover no-repeat';
const a = document.querySelectorAll('.promo__interactive-item');
a.forEach(item=>{
    console.log(item);
})
movieDB.movies.sort();
console.log(movieDB.movies);
        a.forEach((item,i) =>{
            item.textContent =`${i+1}) ${movieDB.movies[i]}` ;
        });
// const movieList = document.querySelector('.promo__interactive-list');
// movieList.innerHTML='';
// movieDB.movies.sort();
// movieDB.movies.forEach((item,i)=>{
//     movieList.innerHTML+=`<li class="promo__interactive-item">${i+1}) ${item}<div class="delete"></div>
//                         </li>`;
// });
