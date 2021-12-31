const { words } = require('./words')

// How many words contain the substring 'TYPE'?

function solution(words) {
  const result = []

  words.forEach(word => {
    if (word.match(/TYPE/g)) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))