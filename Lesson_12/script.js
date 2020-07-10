'use strict';

let numberOfFilms;
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++){
    const movieName = prompt("Один из последних просмотренных фильмов?", ""),
          movieRating = prompt("На сколько оцените его?", "");
  
    if (movieName != "" && movieRating != "" && movieName != null && movieRating != null && movieName.length < 50){
      personalMovieDB.movies[movieName] = movieRating;
    } else {
      i--;
    } 
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10){
    console.log("Просмотрено довольно мало фильмов");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30){
    console.log("Вы классичесский зритель");
  } else if (numberOfFilms >= 30){
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for(let i = 0; i < 3; i++){
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
  }
}
writeYourGenres();

function ShowMyDB(hidden) {
  if(!hidden){
    console.log(personalMovieDB);
  }
}

ShowMyDB(personalMovieDB.privat);

//console.log(personalMovieDB);