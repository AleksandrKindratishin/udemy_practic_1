'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: false
}


   let lastFilm1 = prompt('Один из последних просмотренных фильмов?');
   let balls1 = +prompt('На сколько оцените его?')
   let lastFilm2 = prompt('Один из последних просмотренных фильмов?');
   let balls2 = +prompt('На сколько оцените его?')

   personalMovieDB.movies[lastFilm1] = balls1;
   personalMovieDB.movies[lastFilm2] = balls2;  


console.log(personalMovieDB);