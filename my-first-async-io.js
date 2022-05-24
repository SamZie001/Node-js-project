const fs = require('fs')
const process = require('process')

fs.readFile(process.argv[2], {encoding: 'utf8'},(err,data)=>{
    if(err){
        console.log()
    } else{
        const lines = data.split(/\r\n|\r|\n/).length-1
        console.log(lines)
    }
})

