const figlet = require('figlet');

figlet('Made by', (err, result) =>{
    console.log(err || result);
})

figlet('Jc Johan', (err, result) =>{
    console.log(err || result);
})