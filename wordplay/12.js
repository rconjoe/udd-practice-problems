const { words } = require('./words')

// Create and print an array containing all the words that end in 'GHTLY'

function solution(words) {
  const result = []

  words.forEach(word => {
    if (word.endsWith('GHTLY')) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))