const fs = require('fs')
const text = fs.readFileSync('./sowpods.txt', 'utf-8')
export default text.split('\n')
