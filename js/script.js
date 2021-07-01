"use strict"




// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
//     while (numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
//     }
// }
// start();

const personalMovieBD = {
    count: '',
    movies:{},
    actors:{},
    genres:[],
    privat:true,
    start:()=>{
         personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        while (personalMovieBD.count =='' || personalMovieBD.count == null || isNaN(personalMovieBD.count)){
            personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms(){
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
    },
    detectedPersonalLevel(){
        if(personalMovieBD["count"]<10){
            console.log("Просмотрено довольно мало фильмов");
        }else if (personalMovieBD["count"]<=30){
            console.log("Вы классический зритель");
        }else {
            console.log("Вы киноман");
        }
    },
    showMyDB(hidden){
        if (!hidden){
            console.log(personalMovieBD);
        }else {
            console.log('Нет доступа')
        }
    },
    writeYourGenres:(a) => {
        for (let i=1; i<=3; i++){
            a[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');
            if( a[i-1]==='' ||  a[i-1] === null){
                i--;
            }
        }
        //     a[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');
        //     while (a[i-1]==='' || a[i-1] === null || isNaN(a[i-1])){
        //         a[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');
        //     }
        // }
       a.forEach((item,i) => {
           console.log(`Любимый жанр ${i+1} - это ${item}`);
        })
    },
    toggleVisibleMyDB(){
        personalMovieBD.privat = !personalMovieBD.privat;
    }
};
// let numberOfFilms = personalMovieBD.start();


// function rememberMyFilms(){
//     for (let i = 0; i<2; i++){
//         const a = prompt("Один из последних просмотренных фильмов",''),
//             b = prompt('оцените его','');
//         if (a !=null && b!=null && a!='' && b !='' && a.length<50){
//             personalMovieBD.movies[a] = b;
//             console.log('done');
//         }else{
//             console.log('error');
//             i--;
//         }}
// }
// rememberMyFilms();


// function detectedPersonalLevel(){
//     if(personalMovieBD["count"]<10){
//         console.log("Просмотрено довольно мало фильмов");
//     }else if (personalMovieBD["count"]<=30){
//         console.log("Вы классический зритель");
//     }else {
//         console.log("Вы киноман");
//     }
// }

// detectedPersonalLevel();

// function showMyDB(hidden){
//     if (!hidden){
//         console.log(personalMovieBD);
//     }else {
//         console.log('Нет доступа')
//     }
// }
// function writeYourGenres(a){
//     for (let i=1; i<=3; i++){
//         a[i-1]=prompt(`Ваш любимый жанр под номером ${i}`,'');
//     }
// }
// writeYourGenres(personalMovieBD.genres);
// showMyDB(personalMovieBD["privat"]);

personalMovieBD.start();
// personalMovieBD.detectedPersonalLevel();
// personalMovieBD.writeYourGenres(personalMovieBD.genres);
personalMovieBD.toggleVisibleMyDB();
personalMovieBD.writeYourGenres(personalMovieBD.genres);
personalMovieBD.showMyDB(personalMovieBD.privat);
// console.log(personalMovieBD);