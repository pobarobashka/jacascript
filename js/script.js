"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieBD = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

const a = prompt("Один из последних просмотренных фильмов",''),
      b = prompt('оцените его',''),
      c = prompt("Один из последних просмотренных фильмов",''),
      d = prompt('оцените его','');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD)