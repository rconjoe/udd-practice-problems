// Read the NBA finals CSV data into one or more dictionaries as needed to complete the questions.
// Export it as needed to use in the question files.

const fs = require ('fs');
const nba = fs.readFileSync("nba_finals.csv", 'utf-8');

module.exports = {
    nbaFinals: nba.split('\n')
}