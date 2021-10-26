const prompt = require('prompt-sync')();

let numero = prompt('Digite um valor:');

while (numero == 0) {
  console.log('Numero digitado não pode ser 0.');
  numero = prompt('Digite um valor: ');
}

if (numero > 0) {
  console.log('Número é positivo');
} else {
  console.log('Número é negativo!');
}
