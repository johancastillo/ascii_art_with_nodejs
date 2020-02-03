const figlet = require('figlet');

figlet('Johan', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
},(err, result) =>{
    console.log(err || result);
})
