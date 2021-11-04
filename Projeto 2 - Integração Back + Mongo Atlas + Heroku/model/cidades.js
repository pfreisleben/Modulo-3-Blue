const mongoose = require('mongoose');

const cidadesModel = new mongoose.Schema({
  nome: { type: String, required: true },
  qtdBairros: { type: Number, required: true },
  populacao: { type: Number, required: true },
  dtAniversario: { type: Date, required: true },
});

const Cidade = mongoose.model('Cidades', cidadesModel);

module.exports = Cidade;
