const { words } = require('./words')

// What are all of the words with no vowel and not even a Y?

function solution(words) {
  const result = []

  const forbidden = ['A', 'E', 'I', 'O', 'U', 'Y']

  words.forEach(word => {
    if (!forbidden.some(letter => word.includes(letter))) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))