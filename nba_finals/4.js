/**
 * Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
 * - 6 times: Michael Jordan
 * - 3 times: Shaquille O'Neal, LeBron James
 * - 2 times: <etc>
*/

const {nbaFinals} = require ('./nbaData.js')

function solution(){
    let allMvp = []; 
    const rawFinals = nbaFinals;

    //this block is to extract all the MVP's
    rawFinals.shift();
    rawFinals.forEach(finals => {
        const value = finals.split(',');
        const mvp = value[4].replace(/(\r)/gm, "")
        if (mvp !== '') {// csv is returning some extra data on 1st and last line when imported.
            allMvp.push(mvp)// This was a quick fix to eliminate my problem.
        }
    })
    //console.log(`first mvp: ${allMvp[0]}`)
    function noDups(array){
        return [...new Set(array)]
    };

    //this block is to count how many each player has won MVP    
    let players ={}; // hold players and their number of MVP's
    for (let i = 0; i < allMvp.length; i++){
        let count = 0;
        for(let j = 0; j < allMvp.length; j++){
            if (allMvp[i] === allMvp[j]){
            count++  
            }      
        }
        if (count === 6){
            players['- THE GOAT'] += `${allMvp[i]},`
        } else if (count === 4){
            players[`- 4 Times`] += `${allMvp[i]},`
        } else if (count === 3){
            players[`- 3 Times`] += `${allMvp[i]},`
        } else if (count === 2){
            players[`- 2 Times`] += `${allMvp[i]},`
        }
    }
    console.log(players)







    // this block is sorting the players by number of times won MVP
    let sortedPlayers = []
    for (let player in players) {
        sortedPlayers.push([player, players[player]]);
    }
    // Object.entries(sortedPlayers).forEach(([key, value]) => {
    //     x[(`${key}: ${value}`)]
    // });
    // const obj = Object.fromEntries(sortedPlayers);
    // const value = Object.values(obj);

    // console.log(sortedPlayers)



    // for(let player of obj){

    // }
    
    // sortedPlayers.sort(function(a, b) {
    //     return b[1] - a[1];
    // });

    

    
}
solution()

    
    
         



// let players =[]; // hold players and their number of MVP's
// for (let i = 0; i < allMvp.length; i++){
//     let x = [];
//     let count = 0;
//     if (!(allMvp[i] in x )){
//         x[allMvp[i]] = 1 //setting value to 1
//     } else { 
//         x[allMvp[i]] += 1 //adding 1 eveytime player is found
//         count++
//     }
    
// }
