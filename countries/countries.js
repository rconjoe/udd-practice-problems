const fs = require('fs')
const text = fs.readFileSync('countries.txt', 'utf-8')
module.exports = {
  countries: text.split('\n')
}