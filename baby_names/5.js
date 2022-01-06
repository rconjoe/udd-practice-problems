const { oldNames, newNames } = require('./names')

// What are all of the names that were top 40 baby names in both 1880 and 2020?

function solution() {

const tie = []

oldNames.forEach(old => {
  newNames.forEach(current => {
    if(old === current){
      old = current
      tie.push(old);
    }
  })
})
return tie
}
console.log(solution())