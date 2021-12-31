const fs = require('fs')
const text = fs.readFileSync('sowpods.txt', 'utf-8')
const chars = text.split('')

// Which of the letters Q, X, and Z is the least common?

function solution(chars) {
  let result = []

  const counters = {
    Q: 0,
    X: 0,
    Z: 0
  }

  chars.forEach(char => {
    if (char === 'Q') counters.Q++
    else if (char === 'X') counters.X++
    else if (char === 'Z') counters.Z++
  })

  result = Object.keys(counters).reduce((a, b) => counters[a] < counters[b] ? a : b)

  return result
}

console.log(solution(chars))