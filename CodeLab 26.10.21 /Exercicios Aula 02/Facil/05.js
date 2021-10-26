/* Escreva um programa que receba dois valores digitados pelo usuário (utilize o objeto Math para arredondar o calculo):
Quantidade de vida de um monstro (entre 10 e 50);Valor do ataque do jogador por turno (entre 5 e 10);Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.O jogador irá derrotar o monstro em 8 turnos. */
const prompt = require('prompt-sync')();

let vida = prompt('Digite a vida do monstro(entre 10 e 50): ');
let ataque = prompt('Digite o ataque do jogador(entre 5 e 10): ');

let turnos = Math.ceil(vida / ataque);

console.log(`Você precisará de ${turnos} turnos para matar o monstro.`);
