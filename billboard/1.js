const { removeAllListeners } = require('process');
const songs = require('./songs')
const { top100 } = require('./songs')

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


 function solution() {
 
   /**
    * First we initialize an empty array that will hold our songs, split into 52 arrays, one song per week.
    * We also remove the first line from the list, since that line just has the column names.
    */
   const year = []
   top100.shift()
   let  number1 =[];
 
   /**
    * For each week in the year (52), 
    * we splice the first 100 songs off of the original array of all songs.
    * 
    * Then, for each song in that group of 100,
    * we split the fields up at each comma.
    * 
    * We assign those fields to a song object,
    * then push the song to our week array.
    * 
    * After each iteration through 100 songs, 
    * we push the resulting week array to our year array.
    *
    * 
    */
 
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
       if (fields[0]===('1')){
         number1.push(fields[1]+ ' - '  +fields[2]) 
         

       }

     })
   }

   let removeRepeats =  new Set (number1)

   console.log(removeRepeats)


 }

 solution()





