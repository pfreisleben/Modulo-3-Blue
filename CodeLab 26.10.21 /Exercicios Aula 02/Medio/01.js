const prompt = require('prompt-sync')();

let numero = prompt('Digite um numero: ');
let divisao = numero / 2;

if (divisao == 0) {
  console.log('O numero é par!');
} else {
  console.log('O número é impar!');
}
