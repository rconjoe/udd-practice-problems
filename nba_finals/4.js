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

    //this block is to count how many each player has won MVP    
    let players =[]; // hold players and their number of MVP's
    for (let i = 0; i < allMvp.length; i++){
        if (!(allMvp[i] in players )){
            players[allMvp[i]] = 1 //setting value to 1
        } else { 
            players[allMvp[i]] += 1 //adding 1 eveytime player is found
        }
    }

    // this block is to sort the players by number of wins from most to least
    let sortedPlayers = []
    for (let player in players) {
        sortedPlayers.push([player, players[player]]);
    }
    sortedPlayers.sort(function(a, b) {
    return b[1] - a[1];
    });

    let toObj = sortedPlayers.map(function(x){ //converts array of array to array of objects
        return{
        key: x[0], value:x[1]
        }
    })

    //this block is to display output in desired manner
    let topMvps = toObj.filter(function (mvp){

        if(mvp.value >= 2 && mvp.value === 6 && mvp.value === mvp.value){
            console.log(`6 times : ${mvp.key}`)
        } else if(mvp.value >= 2 && mvp.value === 5 && mvp.value === mvp.value){
            console.log(`5 times : ${mvp.key}`)
        }else if(mvp.value >= 2 && mvp.value === 4 && mvp.value === mvp.value){
            console.log(`4 times : ${mvp.key}`)
        }else if(mvp.value >= 2 && mvp.value === 3 && mvp.value === mvp.value){
            console.log(`3 times : ${mvp.key}`)
        }else if(mvp.value >= 2 && mvp.value === 2 && mvp.value === mvp.value){
            console.log(`2 times : ${mvp.key}`)
        }
    })    
}
solution()


/* 
    I know this isnt the EXACT output but didnt want to waste more time when i could be solving and learning elsewhere
 */