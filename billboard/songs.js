// Import the songs data from the CSV file and export it for use in question files.const fs = require('fs')
const fs = require('fs')
const billboard = fs.readFileSync('billboard100_2000.csv', 'utf-8')

module.exports = {
  top100: billboard.split('\n')
}