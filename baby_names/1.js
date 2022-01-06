const { oldNames, newNames } = require('./names')

// What is the shortest baby name in the top 40 baby names for 2020?

function solution() {
const result = [];

    newNames.forEach(newNew => {
    let shortest = newNames[0];
    let notShortest = newNew;
      if (shortest.length > notShortest.length){
            shortest = notShortest
            result.push(shortest)

    };
  })
  return result
}
  console.log(solution())

  