const { words } = require('./words')

// What are all of the words that have all 5 vowels, in alphabetical order?

function solution(words) {
  const result = []

  // * The same solution works here since we check our alphabetical list
  // for vowels in alphabetical order.
  const vowels = ['A', 'E', 'I', 'O', 'U']

  words.forEach(word => {
    if (vowels.every(vowel => word.includes(vowel))) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))