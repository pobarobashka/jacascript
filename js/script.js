"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieBD = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

// const a = prompt("Один из последних просмотренных фильмов",''),
//     b = prompt('оцените его',''),
//     c = prompt("Один из последних просмотренных фильмов",''),
//     d = prompt('оцените его','');

for (let i = 0; i<2; i++){
    const a = prompt("Один из последних просмотренных фильмов",''),
        b = prompt('оцените его','');
    if (a !=null && b!=null && a!='' && b !='' && a.length<50){
        personalMovieBD.movies[a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }
}
if(personalMovieBD["count"]<10){
    console.log("Просмотрено довольно мало фильмов");
}else if (personalMovieBD["count"]<=30){
    console.log("Вы классический зритель");
}else {
    console.log("Вы киноман");
}



console.log(personalMovieBD)