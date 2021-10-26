/* E os 10% do garçom?
Defina uma variável para o valor de uma refeição que custou R$ 42,54;Defina uma variável para o valor da taxa de serviço que é de 10%;Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99. */

let vlrRefeicao = 42.54;
let vlrTaxa = 10;

console.log(
  `O valor da conta é: ${(vlrRefeicao * (vlrTaxa / 100) + vlrRefeicao).toFixed(
    2
  )}`
);
