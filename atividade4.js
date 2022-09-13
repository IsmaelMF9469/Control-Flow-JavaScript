const prompt = require('prompt-sync')();

let nString = prompt('Diga um numero: ')
let n = Number(nString)

if(n % 2 == 0){
    console.log(`O número é par: ${n}`)
    console.log(`${n = Math.sqrt(n,2.0)}`)
}else if(n % 2 == 1){
    console.log(`O número é ímpar: ${n}`)
    console.log(`${n = Math.pow(n,2.0)}`)
}