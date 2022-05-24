const http = require('http')
const process = require('process')

http.get(`${process.argv[2]}`,(req,res)=>{
    console.log(res.length)
    console.log(res)
})


// const str = 'My name id sam'
// console.log(str.length)