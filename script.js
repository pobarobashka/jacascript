'use strict';

let numberOfFilms;

// function start(a){
//     a = +prompt('Сколько фильмов вы уже посмотрели?');
//     while (a==''|| a==null|| isNaN(a)){
//         a = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
//     return a;
// };
const    personalMovieDB= {
    count: '',
    movies:{},
    actors:{},
    genres:[],
    privat:true,
    start:function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (personalMovieDB.count==''|| personalMovieDB.count==null|| isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    moviesFun: function (a){
    for (let i = 0; i<2;i++){
        const moviesName = prompt('Один из последних просмотренных фильмов?');
        if(moviesName!=0&&moviesName!=''&&moviesName.length<50){
            const rating = prompt('На сколько его оцените?');
            if (rating!=''){
                a[moviesName] = rating;
            }else {
                i--;
            }
        }else {
            i--;
        }
    }
},
    countFun:function (a){
    if (a<10){
        console.log("Просмотрено довольно мало фильмов");
    }else {
        if (a<30){
            console.log("Вы классический зритель");
        }else {
            if (a>30){
                console.log("Вы киноман");
            }else {
                console.log("Произошла ошибка");
            }
        }
    }
},
    showMyDB:function (a){
    if (!a){
        console.log(personalMovieDB);

    }
},
    writeYourGenres:function (a){
    for (let i = 0; i<3; i++){
        a[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`);
        while (a[i]==''||a[i]==null){
            a[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`);
        }
    }
        a.forEach((item,i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        })
    },
    toggleVisibleMyDB:(a)=>{
        a=!a;
        personalMovieDB.privat=a;
        personalMovieDB.showMyDB(a);
    }
};

// personalMovieDB.start();
// personalMovieDB.moviesFun(personalMovieDB.movies);
// personalMovieDB.countFun(personalMovieDB.count);
// personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres(personalMovieDB.genres);
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
// writeYourGenres(personalMovieDB.genres);
// showMyDB(personalMovieDB.privat);
// movies(personalMovieDB.movies);
// count(personalMovieDB.count);
console.log(personalMovieDB);
