const fs = require('fs')
const text = fs.readFileSync('./wordplay/sowpods.txt', 'utf-8')
module.exports = {
  words: text.split('\n')
} 