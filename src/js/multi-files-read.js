const fs = require('fs');

function myReadFile(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, 'utf-8', function(err, data){
            if(err){reject(err)} else {
                resolve(data)
            }
        })
    })
}

Promise.all([myReadFile("README.md"), myReadFile("multi-files-read.js")]).then(function(out){
    console.log(out)
})