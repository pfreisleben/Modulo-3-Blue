const mongoose = require('mongoose');

const estadosModel = new mongoose.Schema({
  nome: { type: String, required: true },
  regiao: { type: String, required: true },
  populacao: { type: Number, required: true },
  vlrSalarioMin: { type: Number, required: true },
});

const Estado = mongoose.model('Estados', estadosModel);

module.exports = Estado;
