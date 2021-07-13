

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?'),
    personalMovieDB= {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
    };
function movies(a){
    for (let i = 0; i<2;i++){
        const moviesName = prompt('Один из последних просмотренных фильмов?');
        if(moviesName!=0&&moviesName!=''&&moviesName.length<50){
            rating = prompt('На сколько его оцените?');
            if (rating!=''){
                a[moviesName] = rating;
            }else {
                i--;
            }
        }else {
            i--;
        }
    }
}
function count(a){
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
}
movies(personalMovieDB.movies);
count(personalMovieDB.count);
console.log(personalMovieDB);
