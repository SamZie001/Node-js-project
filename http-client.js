const http = require('http')
const fs = require('fs')
const process = require('process')

http.get(`${process.argv[2]}`, function callback(response){

    response.setEncoding('utf8')
    .on('data', function (chunck){
        console.log(chunck)
    })

})