const { words } = require('./words')

// What are all of the words that contain the word CAT and are exactly 5 letters long?

function solution(words) {
  const result = []

  words.forEach(word => {
    if (word.includes('CAT') && word.length === 5) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))