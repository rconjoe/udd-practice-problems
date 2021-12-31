const { words } = require('./words')

// What are all of the words containing a Q but not a U?

function solution(words) {
  const result = []

  words.forEach(word => {
    if (word.includes('Q') && !word.includes('U')) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))