// let a = Math.floor(Math.random() * 100)
// console.log(a)
// if (a > 50) {
//     console.log('O valor de a está na metade maior da sequência');
// } else if  (a === 50){
//     console.log (' o valor de a é igual a 50')
// } else if (a < 50){
//     console.log ('o valor de a está na metade menor da sequencia')
// }

//* o else toda condição que não for atendida else if condição especifica
//*else if verfifica primeiro a condição
//*else presumi que esta ok a condição
//! Diferença entre a comparação com dois ou três =

//*== só compara valores
//*=== valores e tipos 
//* != sinal de diferente para valor !== tipo

let a = 50
let b = 50
let c = '50'

console.log(`Essa comparação é: ${a == b}`);
console.log(`essa comparação é: ${a===b} `);
console.log(`essa comparação é: ${a===c} `);