'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
if (numberOfFilms < 10){
  console.log("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30){
  console.log("Вы классичесский зритель");
} else if (numberOfFilms >= 30){
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let movieName, movieRating;

for (let i = 0; i < 2; i++){
  movieName = prompt("Один из последних просмотренных фильмов?", "");
  movieRating = prompt("На сколько оцените его?", "");

  if (movieName != "" && movieRating != "" && movieName != null && movieRating != null && movieName.length < 50){
    personalMovieDB.movies[movieName] = movieRating;
  } else {
    i--;
  } 
}
console.log(personalMovieDB);