const readline = require('readline').createInterface({
    input: process.stdin,    
})

readline.on('line', (input) => {
    console.log(input.split('').reverse().join(''));
    console.log("");
});