const fs = require('fs')
const oldText = fs.readFileSync('./baby_names/baby_names_1880_short.txt', 'utf-8')
const newText = fs.readFileSync('./baby_names/baby_names_2020_short.txt', 'utf-8')
module.exports = {
  oldNames: oldText.split('\n'),
  newNames: newText.split('\n')
}