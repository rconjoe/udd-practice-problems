// Create a command line tool for storing and fetching key-value pairs. In other words, given a key
// and a value, which are both strings, it can store key and value together, and then return that
// value when fetched by that key. The tool must be able to be run from the command line by
// typing "key-value", though it is acceptable to also require the path or an extension (eg,
// "./key-value.rb" is fine). If needed, it is acceptable to include a setup script that must be
// run before the tool can be run. Running the tool must open an interactive session that accepts
// put, fetch, and exit commands. When ready to accept a command, it must output the string
// "> " as a command prompt.
// The put command should accept a key and a value, for example, "put favorite_color
// purple". That value should then be stored with that key. If the key already exists in the
// system, the old value should be discarded. If successful, the command should output the string
// "ok".
// The fetch command should just accept a key, for example, fetch favorite_color. If a
// value with that key has been entered, it should output that value ("purple"). If no value has
// been entered for that key, it should output the string "Value not found."
// The exit command should output the string "Bye!" and exit the program.
// If any other command is entered, it should output the string "Unknown command. Known
// commands are: put, fetch, exit".
// If a command has the wrong number of arguments or is otherwise malformed, it should output
// the string "Invalid syntax."
// Here is an example of what a full session might look like. The first line represents running the
// program from your terminal. This is just example input -- your program should accept any
// reasonable strings as names and values.
// $ key-value
// > put favorite_color purple
// ok
// > put favorite_flavor strawberry
// ok
// > fetch favorite_color

// let result = {"Joe Diffie": ["Some song", "Another song"], "Taylor Swift": ["Teardrops on my Guitar", "All too Well"]};
// let mostOnBoard = 1

// const artistName = "Joe Diffie";
// console.log(result['Joe Diffie']);

// var cats = ['Tom','Fluffy','Tom','Bella','Chloe','Tom','Chloe'];
// var counts = {};
// var compare = 0;
// var mostFrequent;

// for(var i = 0, len = array.length; i < len; i++){
//     var word = array[i];
    
//     if(counts[word] === undefined){
//         counts[word] = 1;
//     }else{
//         counts[word] = counts[word] + 1;
//     }
//     if(counts[word] > compare){
//           compare = counts[word];
//           mostFrequent = cats[i];
//     }
//  }

const { top100 } = require('./songs')
function solution() {
// removes 1st line of array
  top100.shift()
    let allSongs = []
    let allArtist = []
    let allArtist2 = []

  for (i=0; i< 53; i++) {
let mostSongs = []
let mostArtist = []


    const rawSongs = top100.splice(0, 100)
    rawSongs.forEach(rawSong => {
      const fields = rawSong.split(',')
      const songs = {
      rank: fields[0],
      song: fields[1],
      artist: fields[2],
      last_week: fields[3],
      peak_rank: fields[4],
      weeks_on_board: fields[5],
      date: fields[6]
      }
// seperates song and artist into its own object
        let artistName = [songs.artist];
        let artistSong = [songs.song];
        allArtist.push(artistName)
        allSongs.push(artistSong)
    })
  }            



// // start of loop that counts how many songs artist had on board
let counts = {};
let compare  = 0;
let result = [];

for(i = 0; i < allArtist.length; i++){
    for(j = 0; i < allArtist.length; j++){
        if(allArtist[i] === allArtist[j]){
            counts++
        }
    }
       console.log(counts)

  
 }

}
solution();
