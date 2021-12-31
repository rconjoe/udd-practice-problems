const { words } = require('./words')

// What is the shortest word that contains all 5 vowels?

function solution(words) {
  let result = []

  const vowels = ['A', 'E', 'I', 'O', 'U']
  const hasAllVowels = []

  words.forEach(word => {
    if (vowels.every(vowel => word.includes(vowel))) {
      hasAllVowels.push(word)
    }
  })

  result = hasAllVowels.reduce((a, b) => a.length <= b.length ? a : b)

  return result
}

console.log(solution(words))