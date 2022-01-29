/**
 * Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
 * - 6 times: Michael Jordan
 * - 3 times: Shaquille O'Neal, LeBron James
 * - 2 times: <etc>
*/

const { count } = require('console');
const {nbaFinals} = require ('./nbaData.js')

function solution(){
    let allMvp = []; //holds data of keys var
    const rawFinals = nbaFinals;
    rawFinals.shift();
    rawFinals.forEach(finals => {
        const value = finals.split(',');
        const keys = {
            mvp : value[4],
        }
        allMvp.push(keys); // pushes keys ouside of scope
    })

    let players = [];
    for (let i = 0; i < allMvp.length; i++){
        if (!(allMvp[i].mvp in players )){
            players[allMvp[i].mvp] = 1 //setting value to 1
        } else { 
            players[allMvp[i].mvp] += 1 //adding 1 eveytime player is found
        }
    }

    let sortedPlayers = Object.entries(players)//.sort(function(a,b){return players[a] - players[a]})//.map(key => [players[key], key])
    sortedPlayers.shift() // csv is returning some extra data on 1st and last line when imported.
    sortedPlayers.pop() // This was a quick fix to eliminate my problem.
    sortedPlayers.pop()
    sortedPlayers.sort(function compareNumbers(a, b) {
        return sortedPlayers[a] - sortedPlayers[b];
      })
      console.log(sortedPlayers)


    // for(let i = 0; i < sortedPlayers.length; i++){
    // }

    // for(let i = 0; i < sortedPlayers.length; i++){

    //     if(sortedPlayers[i]){

    //     }
    // }
    
}
solution()

    
    
         



