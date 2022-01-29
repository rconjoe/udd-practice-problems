// What artist had the most songs chart in 2000, and what were those songs?

const songs = require('./songs');
const { top100 } = require('./songs')
function solution(){
  let artistAndSongs = [];
  top100.shift()
  top100.forEach(rawSongs =>{
    const fields = rawSongs.split(',')
    const songs ={
      artist: fields[2],
      song: fields[1]
    }
  let key = songs.artist
  let value = songs.song
  if (!(key in artistAndSongs)) {
    artistAndSongs[key] = [value];
  } else {
    let existing_value = artistAndSongs[key];
    existing_value.push(value);
    let values = [...new Set(existing_value)]; // delete duplicate values
    artistAndSongs[key] = values;
    }

   })
    //count all songs of each artist 
    //find the one with the most songs
    //
  let topArtist = ''
  let mostSongs = 0;
 
  for (let artist in artistAndSongs) {
    let songs = artistAndSongs[artist];
    if(songs.length > mostSongs){
      mostSongs = songs.length
      topArtist = artist
    }
  }
  console.log(topArtist)
  console.log(artistAndSongs[topArtist])
}

solution();































//     artistAndSongs[songs.artist] = [songs.song]
//     let allArtist = songs.song;
//     let allSongs = songs.song;

//     if (allArtist in artistAndSongs){
//       artistAndSongs.push(allSongs)

//     } 
//     // else {
//     //   // do another thing
//     //   artistAndSongs

//     // };
//     console.log(artistAndSongs)

//   })

  
// }

// solution()


















// const { top100 } = require('./songs')
// function solution() {
//   let artistAndSongs = [];
//   top100.shift()  // removes 1st line of array
//   top100.forEach(rawSong => {
//     const fields = rawSong.split(',')// returns array
//     const song = {
//       rank: fields[0],
//       song: fields[1],
//       artist: fields[2],
//       last_week: fields[3],
//       peak_rank: fields[4],
//       weeks_on_board: fields[5],     
//       date: fields[6]
//     }
//   //build dictionary of keys: artist(strings) and values: all the artiist songs(arrays) 
//   // 1. get some empty buckets, 
//   let artistBucket = {}

//   console.log(artistAndSongs)

  // 2. take out each song and put it in the artist's bucket, 


  // 3. then it's easy to tally them
//   let key =[song.artist]
//   let value= [song.song];// []adds key: value to objects
//   if (!(key in artistAndSongs)) {
//     artistAndSongs[key] = [value];
//     } else {
//         let existing_value = artistAndSongs[key];
//         existing_value.push(value);
//         artistAndSongs[key] = existing_value;
//       }
//       if (!(value in artistAndSongs)) {
//         artistAndSongs[key] = [value];
//         } else {
//           let existing_value = artistAndSongs[value];
//           existing_value.push(key);
//           artistAndSongs[key] = existing_value;
//           }

   
//   })

  
// }

// solution();

