// What is the earliest year on this list, and what were the films from that year?

const {movies} = require('./filmsDate.js')

function solution(){

    let list = [];
    movies.forEach(movies =>{
        const values = movies.split(',')
        const keys = {
            films: values[0],
            filmYear: values[2]
        }    
        list.push(keys)
    })

    function compare( a, b ) {
        if ( a.filmYear < b.filmYear ){
          return -1;
        }
        if ( a.filmYear > b.filmYear ){
          return 1;
        }
        return 0;
    }
    list.sort(compare).shift()

    console.log(list[0])
}
solution()

// Title,Distributor,Release Date,US Sales,World Sales,Runtime,Rating
