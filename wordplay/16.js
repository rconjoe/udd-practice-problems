const { words } = require('./words')

// What is the longest palindrome?

function solution(words) {
  let result = []

  let palindromes = []
  words.forEach(word => {
    if (word === word.split('').reverse().join('')) {
      palindromes.push(word)
    }
  })

  result = palindromes.reduce((a, b) => a.length > b.length ? a : b)

  return result
}

console.log(solution(words))