// const { resourceLimits } = require('worker_threads');
const { oldNames, newNames } = require('./names')

// What are the longest baby names in the top 40 baby names for 2020?
// Make sure you can handle if there's a tie.

function solution() {
  result = [];
  let longest = newNames[0]; 

    newNames.forEach(newNew => {
     let notLongest = newNew;
     if (longest.length < notLongest.length ){
        longest = notLongest;
    }  
  })
  result.push(longest);

  return result
}
console.log(solution());
