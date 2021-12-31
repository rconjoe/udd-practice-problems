const { words } = require('./words')

// What is the longest word that contains no vowels?

function solution(words) {
  let result = []

  const vowels = ['A', 'E', 'I', 'O', 'U']
  const hasNoVowels = []

  words.forEach(word => {
    if (vowels.every(vowel => !word.includes(vowel))) {
      hasNoVowels.push(word)
    }
  })

  result = hasNoVowels.reduce((a, b) => a.length >= b.length ? a : b)

  return result
}

console.log(solution(words))