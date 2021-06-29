"use strict"

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while (numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
// start();

const personalMovieBD = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};



function rememberMyFilms(){
    for (let i = 0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов",''),
            b = prompt('оцените его','');
        if (a !=null && b!=null && a!='' && b !='' && a.length<50){
            personalMovieBD.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }}
}
// rememberMyFilms();


function detectedPersonalLevel(){
    if(personalMovieBD["count"]<10){
        console.log("Просмотрено довольно мало фильмов");
    }else if (personalMovieBD["count"]<=30){
        console.log("Вы классический зритель");
    }else {
        console.log("Вы киноман");
    }
}

// detectedPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieBD);
    }else {
        console.log('Нет доступа')
    }
}
function writeYourGenres(a){
    for (let i=1; i<=3; i++){
        a[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}
writeYourGenres(personalMovieBD.genres);
showMyDB(personalMovieBD["privat"]);


