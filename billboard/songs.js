// Import the songs data from the CSV file and export it for use in question files.

const fs = require('fs')
const songs = fs.readFileSync('billboard/billboard100_2000.csv', 'utf-8')

module.exports = {
  top100: songs.split('\n')
}