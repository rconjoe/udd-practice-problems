/**
 * Print out all of the #1 songs and the artists who made them. 
 * If a song was #1 for more than one week, only print it once.
 * Example output: 
 * "Try Again" - Aaliyah
 * "Say My Name" - Destiny's Child
 * "What A Girl Wants" - Christina Aguilera
 * "Maria Maria" - Santana Featuring The Product G&B
 * "Smooth" - Santana Featuring Rob Thomas
 * "Independent Women Part I" - Destiny's Child
 */


let rawSongs = [];
let y = {}
    // weeks of year
    for (var i = 0; i < 53; i++) {
        // songs
        for (var i = 0; i < 100; i++) {
            top100.forEach(top => {
                [{
                    rank: [0],
                    song: [1],
                    artist: [2],
                    last_week: [3],
                    peak_week: [4],
                    weeks_on_board: [5],
                    date: [6]
                }]
                return rawSongs.push(top.split('\,').map(top))
            })



        }     

    }

    console.log(rawSongs)






