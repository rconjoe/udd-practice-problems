const { words } = require('./words')

// What are all of the words that start and end with a Y?

function solution(words) {
  const result = []

  words.forEach(word => {
    if (word.startsWith('Y') && word.endsWith('Y')) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))