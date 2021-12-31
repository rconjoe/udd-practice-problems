const { words } = require('./words')

// What are all of the words containing UU?

function solution(words) {
  const result = []

  words.forEach(word => {
    if (word.includes('UU')) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))