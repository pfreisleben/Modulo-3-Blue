/* Qual o valor do troco?
Defina uma variável para o valor de uma compra que custou R$100,98;Defina uma variável para o valor que o cliente pagou R$150,00;Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado. */

let compra = 100.98;
let pago = 150;
let troco = Math.round(pago - compra);
console.log(`Valor do troco: ${troco}`);
