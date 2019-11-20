import readline from 'readline';

readline.createInterface({
    input: process.stdin,    
}).on('line', (input) => {
    console.log(input.split('').reverse().join(''));
    console.log("");
});