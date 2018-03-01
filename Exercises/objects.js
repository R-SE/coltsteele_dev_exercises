//lecture 139 my solution
var movieDB = [
  {
    title: "Deadpool",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Kingsman",
    rating: 5,
    hasWatched: true
  },
  {
    title: "SCARY",
    rating: 3,
    hasWatched: false
  },
  {
    title: "Harry Potter",
    rating: 5,
    hasWatched: true
  }
]
// or if I were to use constructor functions
// var movieDB = [];
//
// function MovieMaker(title, rating, hasWatched) {
//   this.title = title;
//   this.rating = rating;
//   this.hasWatched = hasWatched;
// }

function movieInfo(movie) {
  movie.hasWatched ?
    console.log(`You have watched "${movie.title}" - ${movie.rating} stars!`):
    console.log(`You haven't seen "${movie.title}" - ${movie.rating} stars!`);
}
// movieDB.forEach(movieInfo);
