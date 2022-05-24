const fs = require('fs')
const process = require('process')
const path = require('path')

function wholeFunction(){
    
}

fs.readdir(process.argv[2], (err, list) => {
    if (err)
        console.log(err);
    else {
        // const newList = list.filter(file => file.endsWith(`.${process.argv[3]}`))
        // newList.forEach(li=>{
        //     console.log(li)
        // })
        
        const newList = list.filter(file => {
            if(path.extname(`${process.argv[2]}/${file}`)===`.${process.argv[3]}`){
                return file
            }
            
        })
        newList.forEach(li=>{
            console.log(li)
        })
    }
})


module.exports = {
    wholeFunction,
}