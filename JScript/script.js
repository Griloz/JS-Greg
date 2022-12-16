"use strict";

// alert ('Hello');

// const result = confirm("Are u here?");
// console.log (result);


// const answer= prompt ("Вам есть 18?", " ");
// console.log (answer +5);
// console.log (typeof(answer));      ОТВЕТ (5) + 5 БУДЕТ  55   STRING

// const answer= +prompt ("Вам есть 18?", " ");
// console.log (answer +5);
// console.log (typeof(answer));      ОТВЕТ (5) + 5 БУДЕТ  10   NUMBER


// const answers = [];

// answers [0] = prompt ('Whats u name?', '');
// answers [1] = prompt ('Whats u surname?', '');
// answers [2] = prompt ('Where are u live?', '');

// document.write (answers);
// console.log (typeof(answers));

// 23-40



const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};
 
const a = prompt ('Один из последних просмотренных фильмов?',''),
      b = prompt ('На сколько оцените его?',''),
      c = prompt ('Один из последних просмотренных фильмов?',''),
      d = prompt ('На сколько оцените его?','');
 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

 console.log (personalMovieDB);