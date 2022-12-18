// "use strict";

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



// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
// };
 
// const a = prompt ('Один из последних просмотренных фильмов?',''),
//       b = prompt ('На сколько оцените его?',''),
//       c = prompt ('Один из последних просмотренных фильмов?',''),
//       d = prompt ('На сколько оцените его?','');
//  personalMovieDB.movies[a] = b;
//  personalMovieDB.movies[c] = d;

//  console.log (personalMovieDB);


// console.log( NaN || 2 || undefined );                     будет 2 
// console.log( NaN && 2 && undefined );                     будет NAN
// console.log( 1 && 2 && 3 );                               будет 3, последняя правильная и всех четких в И
// console.log( !1 && 2 || !3 );                             будет false 
// console.log( 25 || null && !3 );                          будет 25 первая правильная из сравнения
// console.log( NaN || null || !3 || undefined || 5);        будет 5 последняя правильная в ИЛИ
// console.log( NaN || null && !3 && undefined || 5);        будет 5 последняя правильная в совмещений И and ИЛИ
// console.log( 5 === 5 && 3 > 1 || 5);                      будет true всё правильно но приоритет у И и показывает последню правильную в И

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola|| fries === 3 && nuggets) {
//    console.log('Done!')
// }                                                           покажет Done в консоле, все совпадает как в задаче или хотя бы одно может быть  


// let hamburger;                                              задана через let, так как const подразумевает какое-либо начальное значение
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }                                                         покажет Done в консоле т.к в ИЛИ надо хотя бы что-то совпало

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries ===  3 && nuggets) {        не сработает должно быть четкое соотвесвие хотя бы где то в сравнений И  
//    console.log('Done!')
// }









