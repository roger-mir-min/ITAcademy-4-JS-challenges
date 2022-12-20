const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter(movie => movie["director"] == director);
}

// Exercise 3: Calculate the average of the films of a given director.
//Com que en trobar score="" també he de restar -1  a length, millor forEach.


function moviesAverage(movies) {
  let length = movies.length;
  let total = 0;
  movies.forEach(movie => { if (movie.score == "") { length-- } else { total += movie.score } });
  return (total / length).toFixed(2);
}

function moviesAverageOfDirector(movies, director) {
  return Number(moviesAverage(getMoviesFromDirector(movies, director)));
}

// Exercise 4:  Alphabetic order by title 
//Està bé però no m'ho aprova el test
//Estaria bé fer-la també amb splice en lloc de filter
function orderAlphabetically(array) {
  let ordenada = array.map(movie => movie.title).sort();
  return ordenada.filter(title => ordenada.indexOf(title) < 20);
}

// Exercise 5: Order by year, ascending
//En principi va bé... però no m'ho dona per bo
function orderByYear(array) {
  let arr = [...array];
  return arr.sort(function(a,b){
    if (a.year > b.year || (a.year == b.year && a.title > b.title)) { return 1; }
    else { return -1; }
  }
  );
}

// Exercise 6: Calculate the average of the movies in a category
//Ho faig amb array pq és el que demana test, però moodle diu sobre movies
function moviesAverageByCategory(array, categoria) {
  return Number(moviesAverage(array.filter(movie => movie.genre.includes(categoria))));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  //Rep string de temps i converteix a temps (number) / replace?
  let arr = array.map(movie => ({...movie}));
  arr.forEach(movie =>
    movie.duration = Number(movie.duration.match(/^\d/)) * 60 + Number(movie.duration.match(/\w\d/))
  );
  return arr;
}
// Exercise 8: Get the best film of a year
//Funciona, però estaria bé fer-la amb reduce()
function bestFilmOfYear(array, year) {
  let moviesdelany = array.filter(movie => movie["year"] == year);
  return [moviesdelany.reduce((total, movie) => { if (movie.score > total) { return total.score = movie.score } else { return total } }, moviesdelany[0])];
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
