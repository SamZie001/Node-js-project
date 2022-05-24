const fs = require('fs')
const process = require('process')

const str = fs.readFileSync(process.argv[2]).toString()

const lines = str.split(/\r\n|\r|\n/).length-1

console.log(lines)