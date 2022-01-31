// What is the highest grossing moving from Universal Pictures, domestically?

const {movies} = require('./filmsDate.js')

function solution(){
    const allMovies = movies;

    let listOfMovies = []
    allMovies.forEach(movie => {
        let values = movie.split(',')
        let keys = {
            title: values[0],
            distributer: values[1],
            sales: values[3]
        }
        listOfMovies.push(keys)
    })

    let highGross = listOfMovies.filter(movie => movie.distributer === 'Universal Pictures').sort(function(a, b){return a -b})



    let highDomestic = []
    console.log(highGross)
}
solution()
// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating
