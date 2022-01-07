const { countries } = require('./countries')

// What are all of the countries that have 'United' in the name?

function solution(countries) {
 
  const result = [];

  countries.forEach(country => {git
    if (country.match(/United/g)){
       result.push(country)
    }
  })
  return result

}



console.log(solution(countries));


//done