const { ifError } = require('assert')
const fs = require('fs') //arquivo de sistema

fs.readFile('texto.txt', 'utf8', (err, data) => {
    if(err){
        console.log("joabe viado demais")
    }
    else{console.log(data)
    }
})