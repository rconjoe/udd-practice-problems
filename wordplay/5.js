const { words } = require('./words')

// What are all of the words that have no E or A and are at least 15 letters long?

function solution(words) {
  const result = []

  words.forEach(word => {
    if (
      word.length >= 15 &&
      !word.includes('E') &&
      !word.includes('A')
    ) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))