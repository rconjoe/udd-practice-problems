const { words } = require('./words')

// What are all of the words that have all 5 vowels, in any order?

function solution(words) {
  const result = []

  const vowels = ['A', 'E', 'I', 'O', 'U']

  words.forEach(word => {
    if (vowels.every(vowel => word.includes(vowel))) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))