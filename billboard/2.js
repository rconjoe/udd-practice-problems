// What song was the #1 song for the most weeks of 2000, who was the artist, 
// and how many weeks was it at #1?

const { count } = require('console');
const { top100 } = require('./songs')

function solution() {
  top100.shift()
  // const year=[1];
    let numberOneSongs = []
    let result = [];

for (i=0; i<53; i++) {
  const week = []
  const rawSongs = top100.splice(0, 100)
  rawSongs.forEach(rawSong => {
  const fields = rawSong.split(',')
  const song = {
    rank: fields[0],
    song: fields[1],
    artist: fields[2],
    last_week: fields[3],
    peak_rank: fields[4],
    weeks_on_board: fields[5],        
    date: fields[6]
  }
      //  week.push(song)
        if(song.rank === '1'){numberOneSongs.push(song)}})
     }

let mostNumberOne = 1;
    for(let i = 0; i < numberOneSongs.length; i++){
let count = 0;
      for(let j = i; j < numberOneSongs.length; j++){

          if(numberOneSongs[i].song === numberOneSongs[j].song){
            numberOneSongs[i].song = numberOneSongs[j].song
            count++
          }
          if (count > mostNumberOne){
            result = {
              song: numberOneSongs[i].song,
              artist: numberOneSongs[i].artist
            }
    
          }
        }

      } 

 console.log(result)

}

solution()
