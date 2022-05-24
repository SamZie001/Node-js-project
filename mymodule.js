module.exports = function result(dirname, fileExt,callbackFunction){
    const fs = require('fs')
    const path = require('path')

    callback=(err,data)=>{
        if (err)
            callback(err)
        else {
            const newList = data.filter(file => {
                if(path.extname(`${dirname}/${file}`)===`.${fileExt}`){
                    return file
                }
            })
            newList.forEach(li=>{
            console.log(li)
            })
        }
    }
    

    fs.readdir(dirname, callback())
}