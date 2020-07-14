'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++){
      const movieName = prompt("Один из последних просмотренных фильмов?", ""),
            movieRating = prompt("На сколько оцените его?", "");
    
      if (movieName != "" && movieRating != "" && movieName != null && movieRating != null && movieName.length < 50){
        personalMovieDB.movies[movieName] = movieRating;
      } else {
        i--;
      } 
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10){
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      console.log("Вы классичесский зритель");
    } else if (personalMovieDB.count >= 30){
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  writeYourGenres: function() {
    for(let i = 0; i < 1; i++){
      const genres = prompt(`Введите ваши любимые жанры через запятую`, '').toLocaleLowerCase();

      if (genres != "" && genres != null) {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
  showMyDB: function(hidden) {
    if(!hidden){
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat){
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.privat);