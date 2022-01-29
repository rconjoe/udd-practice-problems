// What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?
const { top100 } = require('./songs')

function solution(){
 const year = []
 top100.shift()

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
  })
}
}
console.log('hello');

console.log(solution())


