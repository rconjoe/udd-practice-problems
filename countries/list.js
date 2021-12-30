const fs = require('fs')
const text = fs.readFileSync('./countries.txt', 'utf-8')
export default text.split('\n')