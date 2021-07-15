/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
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
const addForm = document.querySelector('.add'),
    addInput = document.querySelector('.adding__input'),
    addCheck = document.querySelector('[type="checkbox"]'),
    movieList = document.querySelector('.promo__interactive-list');


addForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let newFilm = addInput.value;
    if (newFilm.length>21){
        newFilm = `${newFilm.substr(0,21)}...`
    };
    if (addCheck.checked){
        console.log("Добавляем любимый фильм");
    };
    movieDB.movies.push(newFilm);
    createMovieList(movieList, movieDB.movies);
    addForm.reset();
})

document.querySelectorAll('.promo__adv img').forEach((item)=>{
    item.remove();
});
document.querySelector('.promo__genre').innerHTML='драма';
document.querySelector('.promo__bg').style.background = "url('../img/bg.jpg') center center/cover no-repeat";

function createMovieList(a,b){
    a.innerHTML='';
    b.sort();
    b.forEach((item,i)=>{
        a.innerHTML += `<li class="promo__interactive-item">${i+1}) ${item} <div class="delete"></div>
                        </li>`;
    });
    document.querySelectorAll('.delete').forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);
            createMovieList(movieList,movieDB.movies);
        })
    })
};

createMovieList(movieList,movieDB.movies);



