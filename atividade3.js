const prompt = require('prompt-sync')();

const idadeString = prompt('Diga a sua idade: ')
const idade = Number(idadeString)

if(idade >= 10 && idade <= 14){
    console.log(`Infantil`)
}else if(idade >= 15 && idade <= 17){
    console.log('Juvenil')
}else if(idade >= 18 && idade <= 25){
    console.log(`Adulto`)
}