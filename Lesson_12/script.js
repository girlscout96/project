'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: "",
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
console.log(personalMovieDB);

let movieName = prompt("Один из полседних просмотренных фильмов?", "");
let movieRating = prompt("На сколько оцените его?", "");
personalMovieDB.movies[movieName] = movieRating;

console.log(personalMovieDB.movies);