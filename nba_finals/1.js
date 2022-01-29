// Write a function that takes as an argument a year and returns the winner 
// of the NBA finals that year.
const {nbaFinals} = require ('./nbaData.js')
// create  a loop thru all years
// create a object that returns the year and the team of that years winner.
// create a function that takes in a year as a parameter and returns the name of team that won that year. 


function finalsWinner(winner){

    const rawFinals = nbaFinals;
    let allTeams = [];
    rawFinals.shift()//removes the header of the data

    rawFinals.forEach(final => {
        const finals = final.split(',') // turns everything within comma's into its own string
        const yearAndTeam = { //takes data and return years and teams only
            year: finals[0],
            winningTeam: finals[1]
        }
        allTeams.push(yearAndTeam)
    })
    for (let topYear of allTeams){
        if (topYear.year === winner){
            return topYear.winningTeam;
        }
    }
}
console.log(finalsWinner("1986"));


