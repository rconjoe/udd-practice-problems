// What distributor has the most films on this list?  
const {movies} = require('./filmsDate.js')

function solution(){
    const allMovies = movies;

    let listOfMovies = []
    allMovies.forEach(movie => {
        let values = movie.split(',')
        let keys = {
            distributer: values[1],
        }
        listOfMovies.push(keys)
    })




    console.log()
}
solution()
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating
