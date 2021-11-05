const mongoose = require('mongoose');

const usuariosModel = new mongoose.Schema({
  nome: { type: String, required: true },
  nomeUsuario: { type: String, required: true },
  senha: { type: String, required: true },
  dtUltimoAcesso: { type: Date, required: true },
});

const Usuario = mongoose.model('usuarios', usuariosModel);

module.exports = Usuario;
