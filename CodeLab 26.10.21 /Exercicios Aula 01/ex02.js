const { subtrai } = require('./moduloscalculadora');
const utils = require('./moduloscalculadora'); // Aqui eu importo os módulos que criei n

// Calculadora simples com as quatro operações e dois números.

const somar = utils.soma(1, 10);
console.log(somar);

const subtrair = utils.subtrai(10, 1);
console.log(subtrair);

const multiplicar = utils.multiplica(2, 10);
console.log(multiplicar);

const dividir = utils.divide(10, 2);
console.log(dividir);
