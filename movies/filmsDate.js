const fs = require ('fs')
const allMovies = fs.readFileSync('top_movies.csv','utf-8')

module.exports = {
    movies: allMovies.split('\n')
}