// Write a function that takes as an argument a team name and returns an array of all
// of the years the team has won the NBA finals.
const {nbaFinals} = require ('./nbaData.js')

function soulution(team){

    const rawFinals = nbaFinals;
    let allTeams = [];

    rawFinals.shift()//removes the header from the data
    rawFinals.forEach(final => {
        const finals = final.split(',') // turns everything within comma's into its own string
        const yearAndTeam = { //takes data and return years and teams only
            year: finals[0],
            winningTeam: finals[1]
        }
        allTeams.push(yearAndTeam)// pushes yearAndTeam outside of loop
    }) //end of rawFinals loop

    let champYears = []
    for(let i = 0; i < allTeams.length; i++){ //for loop to iterate and access array
        let teams = allTeams[i]; //set allTeams[i] to new var in order to access each object 
        if(teams.winningTeam === team){
            champYears.push(teams.year)
        }
    }
    return champYears
}
console.log(soulution('Detroit Pistons'))






