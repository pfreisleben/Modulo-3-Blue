/*
 * O QUE IREMOS APRENDER NO MÓDULO 3 - BACKEND:
 * JAVASCRIPT
 * NODE JS
 * EXPRESS
 * MONGO DB
 * HEROKU
 */

/*
 [ ] PREPARANDO O AMBINETE:
 [ ] INSTALAR O NODE JS (VERSÃO LTS) -> https://nodejs.org/en/
 [ ] CRIAR PASTA DO PROJETO -> ABRIR NO VSCODE
 [ ] INICIALIZAR UM NOVO PROJETO NODE -> NPM INIT -> QUE GERA UM ARQUIVO CHAMADO package.json (ONDE VÃO FICAR TODAS AS BIBLIOTECAS (LIBS) QUE INSTALARMOS EM NOSSO PROJETO)
 [ ] CRIAR ARQUIVO .gitignore E ADD TEMPLATE -> https://github.com/codethi/template-gitignore-node/blob/main/.gitignore OU ADD A PASTA node_modules E OUTROS ITEMS QUE NÃO DESEJAMOS ENVIAR PARA O GITHUB
 [ ] INSTALAR A BIBLIOTECA NODEMON -> npm i nodemon
 [ ] ALTERAR OS SCRIPTS NO ARQUIVO package.json ->  "scripts": {
                                                        "start": "node index",
                                                        "dev": "nodemon index"
                                                    },
 [ ] INSTALAR A BIBLIOTECA (LIB) PROMPT-SYNC PARA CAPTURARMOS INFORMAÇÕES NO CONSOLE -> npm i prompt-sync
 [ ] INSTALAR ALGUMAS EXTENÇÕES QUE VÃO NOS AJUDAR MUITO: 
      * Bracket Pair Colorizer 2
      * ESLint
      * Prettier - Code formatter
      * Thunder Client
      * markdownlint
 [ ] CRIAR ARQUIVO - index.js
*/

/* NODE JS
 * NODE NÃO É UMA LINGUAGEM DE PROGRAMAÇÃO, O NODE É RESPONSÁVEL POR INTERPRETAR A LINGUAGEM JAVASCRIPT (JS) DO LADO DO SERVIDOR
 * NODE NÃO É UM FRAMEWORK
 * NODE É UMA METODOLOGIA ASSÍNCRONA
 */

console.log(
  '############ - Primeiro console.log e template string - ############'
);
const prompt = require('prompt-sync')(); // O que é este "require"? è uma palavra reservada que serve para importarmos bibliotecas (libs) via npm

const nome = prompt('Digite seu nome: ');

/*
 * CONSOLE.LOG() E TEMPLATE STRING
 * O que é este console.log? é uma função que serve para mostrar informações em nosso console/terminal
 * O que é tempate string -> ´´ (crases) ? É uma forma de concaternamos valores de uma variavel dentro de uma string
 * Como posso utilizar uma variavel dentro de uma template string? usando esta sintaxe -> ${variavel}, desta forma o valor da variável vai ser concatena dento de sua string e não precisaremos utilizar o operador +.
 */
console.log(`Olá, ${nome}, seja bem vindo ao fantástico mundo do Nodejs!`);

/* VARIÁVEIS EM JS */

//"var" é uma variavel mutável e é pouco utilizado por ela não respeita escopo e de forma geral, cumpre o mesmo papel que a "let"
var nome1 = 'Ismael';

// "let" é uma variavel mutável e a utilizamos sempre que o valor da variável precisa sofrer mudanças
let nome2 = 'Duda';

// "const" é uma variavel imutável e deve ser utilizada sempre que possível
const nome3 = 'Aluno';

//nome3 = "Ismael";

console.log(nome1);
//console.log(nome2);
// console.log(nome3);

/* CONDICIONAIS EM JS */
/* SE NECESSÁRIO REVISAR OPERADORES LOGICOS */
console.log('############ - Condicionais em JS - ############');

/* IF
 * TESTA SE UMA CONDIÇÃO É VERDADEIRA (true) OU FALSE (false)
 * VERDADEIRA (true) -> EXECUTA O QUE ESTA NO CORPO DO IF
 * FALSA (false) -> NÃO EXECUTA O QUE ESTA NO CORPO DO IF
 */
if (13 > 15) {
  console.log('if 1 - resultado: Sim');
} else {
  console.log('if 1 - resultado: Não');
}

if (13 > 15) {
  console.log('if 2 - resultado: Sim');
} else if (23 < 45) {
  console.log('if 2 - resultado: Sim');
} else {
  console.log('if 2 - resultado: Não para as duas perguntas acima');
}

/* E -> &&, OU -> || */
/* OS OPERADORES LOGICOS (&& / ||) SEMPRE RESULTARA EM UM BOOLEAN (TRUE/FALSE) */

/* OPERADOR OU -> &&
   Valor1    Valor2    Resultado
   true      true      true
   false     true      false
   true      false     false
   false     false     false
*/

/* OPERADOR OU -> ||
   Valor1    Valor2    Resultado
   true      true      true
   false     true      true
   true      false     true
   false     false     false
*/

if (13 > 15 && 23 < 45) {
  console.log('if utilizando &&: SIM(true) para as duas condições acima');
} else {
  console.log(
    'if utilizando &&: NÃO(false) para pelo menos uma das duas condições acima'
  );
}

if (13 > 15 || 23 < 45) {
  console.log(
    'if utilizando ||: SIM(true) para pelo menos uma das duas condições acima'
  );
} else {
  console.log('if utilizando ||: NÃO(false) para as duas condições acima');
}

console.log('############ - Projeto 01 - Detetive - ############');

/* PROJETO 01 - DETETIVE
************************
Vamos exercicitar o que vimos até agora com o famoso projeto do detetive:
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são: 
[ ] 1. "Telefonou para a vítima?" 
[ ] 2. "Esteve no local do crime?" 
[ ] 3. "Mora perto da vítima?" 
[ ] 4. "Devia para a vítima?" 
[ ] 5. "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". 
Caso contrário, ele será classificado como "Inocente".
************************
*/

console.log(
  'Olá, aconteceu um crime nessa cidade, a Carla foi assassinada brutalmente, eu estou encarregado de investigar esse crime, por isso preciso te fazer algumas perguntas... Vamos lá!'
);

const pergunta1 = prompt('Você telefonou para a vítima? [S/N] ');
const pergunta2 = prompt('Você esteve no local do crime? [S/N] ');
const pergunta3 = prompt('Você mora perto da vítima? [S/N] ');
const pergunta4 = prompt('Você devia para a vítima? [S/N] ');
const pergunta5 = prompt('Você já trabalhou com a vítima? [S/N] ');

let cont = 0;

if (pergunta1 === 'S' || pergunta1 === 's') {
  cont++;
}
if (pergunta2 === 'S' || pergunta2 === 's') {
  cont++;
}
if (pergunta3 === 'S' || pergunta3 === 's') {
  cont++;
}
if (pergunta4 === 'S' || pergunta4 === 's') {
  cont++;
}
if (pergunta5 === 'S' || pergunta5 === 's') {
  cont++;
}

console.log(cont);

if (cont === 2) {
  console.log('Você é suspeito do crime!');
} else if (cont === 3 || cont === 4) {
  console.log('Você é cúmplice do crime!');
} else if (cont === 5) {
  console.log('Você é o assassino!');
} else {
  console.log('Você é inocente de todas as acusações!');
}

/* ARRAY EM JS */
console.log('############ - ARRAY em JS - ############');

/* Array faz parte dos objetos globais da linguagem e é utilizado para armazenar uma coleção de elementos em uma única variável */
const frutas = ['Maçã', 'Banana'];
console.log(`Qunatos itens possui meu Array: ${frutas.length}`);

/* Acessando um item do Array pelo seu index
 * O Index de um Array inicia sempre pelo numero 0 (zeor)
 */
const primeiro = frutas[0]; // Maçã
console.log(`Qual é o primeiro item do Array: ${primeiro}`);

const ultimo = frutas[frutas.length - 1]; // Banana
console.log(`Qual é o ultimo item do Array: ${ultimo}`);

/* ITERAR UM ARRAY */
console.log('############ - ITERAR UM ARRAY - ############');

frutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Maçã 0
// Banana 1

/* ADICIONAR UM ITEM AO FINAL DE UM ARRAY */
console.log(
  '############ - ADICIONAR UM ITEM AO FINAL DE UM ARRAY - ############'
);

frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']

frutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Maçã 0
// Banana 1
// Laranja 2

/* REMOVENDO UM ITEM AO FINAL DE UM ARRAY */
console.log(
  '############ - REMOVENDO UM ITEM AO FINAL DE UM ARRAY - ############'
);

frutas.pop('Laranja');
// ['Maçã', 'Banana']

frutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Maçã 0
// Banana 1

/* REMOVENDO UM ITEM NO INICIO DE UM ARRAY */
console.log(
  '############ - REMOVENDO UM ITEM NO INICIO DE UM ARRAY - ############'
);

frutas.shift('Laranja');
// ['Banana']

frutas.forEach((item, indice) => {
  console.log(item, indice);
});
// Banana 0

/* ADICIONANDO UM ITEM NO INICIO DE UM ARRAY */
console.log(
  '############ - ADICIONANDO UM ITEM NO INICIO DE UM ARRAY - ############'
);

frutas.unshift('Morango');
// ['Banana']

frutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Morango 0
// Banana 1

/* PROCURANDO UM INDICE (INDEX) UM ITEM DE UM ARRAY */
console.log(
  '############ - PROCURANDO UM INDICE (INDEX) UM ITEM DE UM ARRAY - ############'
);

const pos = frutas.indexOf('Banana');
console.log(pos);
// 1

/* REMOVENDO UM ITEM DO ARRAY PELO INDICE (INDEX) */
console.log(
  '############ - REMOVENDO UM ITEM DO ARRAY PELO INDICE (INDEX) - ############'
);

frutas.splice(pos, 1); // é assim que se remove um item
console.log(frutas);
// ['Morango']

/* REMOVENDO ITENS DO ARRAY PELO INDICE (INDEX) */
console.log(
  '############ - REMOVENDO ITENS DO ARRAY PELO INDICE (INDEX) - ############'
);

const vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura', 'Batata'];
console.log('vegetais: ', vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura', 'Batata']

const position = 1,
  n = 2;

vegetais.splice(position, n);
//Isso é como se faz para remover itens, n define o número de itens a se remover, a partir da posição (position) em direção ao fim da array.
console.log('Removeu 2 itens: ', vegetais);
// ['Repolho', 'Cenoura', 'Batata'] (o array original é alterado)

vegetais.splice(position, 1);
// é assim que se remove um item
console.log('Removeu 1 item: ', vegetais);
// ['Repolho', 'Batata']

const copiar = vegetais.slice();
// é assim que se copia
console.log('Cópia: ', copiar);
// ['Repolho', 'Batata']

/* Para mais detalhes sobre Arrays, acesse: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array */

/* ESTRUTURAS DE REPETIÇÃO */
console.log('############ - ESTRUTURAS DE REPETIÇÃO - ############');

/*
 * Um laço for é repetido até que a condição especificada seja falsa
 * Executa 5 vezes, com os valores de passos de 0 a 4.
 */
console.log(`Estrutura for:`);
for (let i = 0; i < 5; i++) {
  console.log(`Ande um passo para o leste  ->  I = ${i}`);
}

/*
 * do...while
 * A instrução do...while executará 1x sem verificar a condição e depois repetirá até que a condição especificada seja falsa.
 */
console.log(`Estrutura do...while:`);
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

/*
 * while
 * A instrução while repetirá até que a condição especificada seja falsa.
 */
console.log(`Estrutura while:`);
let nx = 0;
let xx = 0;
while (nx < 3) {
  nx++;
  xx += nx;
  console.log('nx: ', nx, 'xx: ', xx);
}

/*
 * for...in e for...of
 * O exemplo a seguir mostra a diferença entre o for...of e o for...in. Enquanto o for...in interage com o nome das propriedades, o for...of interage com o valor das propriedades.
 */
console.log(`for...in e for...of:`);

let arr = [3, 5, 7];

console.log(`for...in:`);
for (let i in arr) {
  console.log(i);
}
// logs "0", "1", "2", "foo"

console.log(`for...of:`);
for (let i of arr) {
  console.log(i);
}
// logs "3", "5", "7"

/*
 * forEach
 * O método forEach() recebe uma dada função(callback) e executa em cada elemento de um array.
 */
console.log(`forEach:`);

const array = [2, 5, 9];
array.forEach((item, index, array) => {
  console.log(`a[${index}] = ${item} -> array: [${array}]`);
});

/* ARROW FUNCTION - FUNÇÃO DE SETA */
console.log('############ - ARROW FUNCTION - FUNÇÃO DE SETA - ############');

/*
 * Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression).
 * Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
 * Serve principalmente para funções anonimas, a sintaze é bem simples: () => {}
 */

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

materials.forEach((material) => {
  console.log('Arrow Function:', material);
});

/* OBJETOS EM JS */
console.log('############ - OBJETOS EM JS - ############');

/*
 * Um objeto é uma coleção de dados e/ou funcionalidades relacionadas compostas por chave e valor
 */

const pessoa = {
  nome: 'Thiago',
  idade: 27,
  genero: 'Masculino',
};

pessoa.escolaridade = 'Pós-graduado';

//delete pessoa.escolaridade;

pessoa.interesses = ['Futebol', 'Cartas', 'Futvolei', 'Programação'];

pessoa.bio = function () {
  return `Meu nome é ${this.nome}, tenho ${this.idade}, sou do gênero ${this.genero}, sou ${pessoa.escolaridade} e gosto de ${this.interesses[0]}, ${this.interesses[1]}, ${this.interesses[2]} e ${this.interesses[3]}.`;
};

console.log(pessoa.bio());
