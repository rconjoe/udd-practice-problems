const { words } = require('./words')

// What are all of the words that have a B and an X and are less than 5 letters long?

function solution(words) {
  const result = []

  words.forEach(word => {
    if (
      word.length <= 5 &&
      word.includes('B') &&
      word.includes('X')
    ) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))