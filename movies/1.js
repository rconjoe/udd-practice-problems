//What movies on this list were distributed by DreamWorks?

const {movies} = require('./filmsDate.js')

function solution(){
    const allMovies = movies

    //this block is seperating the data
    let listOfMovies =[]
    allMovies.forEach(movie =>{
        let values = movie.split(',')
        let keys = {
            title: values[0],
            distributor: values[1],
        }
        listOfMovies.push(keys)
    })

    //filter movies by dreamworks
    let dreamWorks = listOfMovies.filter(movie => movie.distributor === 'DreamWorks')



    console.log(dreamWorks)
  
    

}
solution()
