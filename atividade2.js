const prompt = require('prompt-sync')();

const aString = prompt('Diga o primeiro numero: ')
const A = Number(aString)

const bString = prompt('Diga o segundo numero: ')
const B = Number(bString)

const cString = prompt('Diga o terceiro numero: ')
const C = Number(cString)

if(A<B && B<C){
    console.log(`${A}/${B}/${C}`)
}else if(A<C && C<B){
    console.log(`${A}/${C}/${B}`)
}else if(B<A && A<C){
    console.log(`${B}/${A}/${C}`)
}else if(B<C && C<A){
    console.log(`${B}/${C}/${A}`)
}else if(C<A && A<B){
    console.log(`${C}/${A}/${B}`)
}else if(C<B && B<A){
    console.log(`${C}/${B}/${A}`)
}