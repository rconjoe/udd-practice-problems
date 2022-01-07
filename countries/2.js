const { countries } = require('./countries')
// this code works with the || symbol but not with the && symbol???? CANT FIGURE IT OUT
// What countries both begin and end with a vowel?
const vowels = ["a","e","i","o","u","A","E","I","O","U"];

function solution(countries) {

  const result = [];

  
  countries.forEach(country => {
    vowels.forEach(vowel => {

      if (country.startsWith(vowel) || country.endsWith(vowel)){
        result.push(country)
      }
    })
  
    })
    return result
  

  
}

console.log(solution(countries));

