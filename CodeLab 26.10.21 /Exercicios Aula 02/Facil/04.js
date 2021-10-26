/* Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida. */

const prompt = require('prompt-sync')();

const opcoes = [
  {
    numero: 01,
    pergunta: 'Cadastrar nome',
  },
  {
    numero: 02,
    pergunta: 'Cadastrar e-mail',
  },
  {
    numero: 03,
    pergunta: 'Cadastrar endereço',
  },
];

const continua = true;

while (continua) {
  opcoes.forEach((pergunta) => {
    console.log(`${pergunta.numero} - ${pergunta.pergunta}`);
  });
  let opcao = prompt('Escolha a opção: ');
  console.log('Você escolheu: ');
  console.log(`${opcoes[opcao--].numero} - ${opcoes[opcao--].pergunta} `);
}
