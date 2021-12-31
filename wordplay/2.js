const { words } = require('./words')

// What are all of the words containing an X and a Y and a Z? 

function solution(words) {
  const result = []

  words.forEach(word => {
    if (
      word.includes('X') &&
      word.includes('Y') &&
      word.includes('Z') 
    ) {
      result.push(word)
    }
  })

  return result
}

console.log(solution(words))