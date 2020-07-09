'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
console.log(personalMovieDB);

let movieName1 = prompt("Один из полседних просмотренных фильмов?", ""),
    movieRating1 = prompt("На сколько оцените его?", ""),
    movieName2 = prompt("Один из полседних просмотренных фильмов?", ""),
    movieRating2 = prompt("На сколько оцените его?", "");
personalMovieDB.movies[movieName1] = movieRating1;
personalMovieDB.movies[movieName2] = movieRating2;

console.log(personalMovieDB.movies);