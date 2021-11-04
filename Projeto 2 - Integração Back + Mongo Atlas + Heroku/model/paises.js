const mongoose = require('mongoose');

const paisesModel = new mongoose.Schema({
  nome: { type: String, required: true },
  populacao: { type: Number, required: true },
  linguaMae: { type: String, required: true },
  pib: { type: Number, required: true },
});

const Pais = mongoose.model('Paises', paisesModel);

module.exports = Pais;
