const prompt = require('prompt-sync')();

const aString = prompt('Diga o primeiro valor: ')
const n1 = Number(aString)

const bString = prompt('Diga o segundo valor: ')
const n2 = Number(bString)

const cString = prompt('Diga o terceiro valor: ')
const n3 = Number(cString)

if(n1>n2 && n1>n3){
    console.log(`A nota ${n1} é a maior nota`)
}else if(n2>n1 && n2>n3){
    console.log(`A nota ${n2} é a maior nota`)
}else if(n3>n1 && n3>n2){
    console.log(`A nota ${n3} é a maior nota`)
}
