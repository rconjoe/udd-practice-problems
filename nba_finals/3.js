// Which teams have made it to the NBA finals but never won?
const {nbaFinals} = require ('./nbaData.js')

function solution(){
    let madeIt = []

    const rawFinals = nbaFinals
    rawFinals.shift()
    rawFinals.forEach(finals => {
        const champInfo = finals.split(',');
        const winnersLosers = {
            winners : champInfo[1],
            losers : champInfo[2],
        }
        madeIt.push(winnersLosers)// pushes winners&losers outside of loop
    })

    let neverWon = []
    for (let i = 0; i < madeIt.length; i++){
        let lost = madeIt[i].losers //made a new var to reach only the losing teams
        if (!(lost === madeIt[i].winners)){
            neverWon = lost
        }

    }
    console.log(neverWon)

}
 console.log(solution())
