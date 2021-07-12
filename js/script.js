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


document.addEventListener('DOMContentLoaded',()=> {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const b = document.querySelectorAll('.promo__adv img'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]'),
        a = document.querySelectorAll('.promo__interactive-item');
    const movieList = document.querySelector('.promo__interactive-list');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value,
            favorite = checkbox.checked;
        if(favorite){
            console.log('Добавляем любимый фильм')
        }
        if(newFilm){
            if(newFilm.length>21){
                newFilm =`${newFilm.substr(0,21)}...`
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies,movieList);
            // createMovieList2();
            addForm.reset();
        }
    });
const deleteAdv = (arr)=>{
    arr.forEach(item => {
        item.remove();
    })
};
deleteAdv(b);

// document.querySelector('.promo__adv').remove();
    document.querySelector('.promo__genre').textContent = 'драма';
    document.querySelector('.promo__bg').style.background = 'url("../img/bg.jpg") center center/cover no-repeat';
    const sortArr = (arr)=>{
        arr.sort();
    }
   // function createMovieList2(){
   //    movieDB.forEach((item,i) =>{
   //        if(!a[i]){
   //            a.prepend(`<li class="promo__interactive-item">${i+1}) ${item}
   //                          <div class="delete"></div>
   //                      </li>`)
   //        }
   //    a[i].textContent =`${i+1}) ${item}` ;
   //      });
   // };
    function createMovieList(films,parent){
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1}) ${item}<div class="delete"></div>
                        </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn,i)=>{
            btn.addEventListener('click',()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(films,parent);
            })
        })
    };
createMovieList(movieDB.movies,movieList);
});