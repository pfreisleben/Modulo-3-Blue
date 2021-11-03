const express = require('express');
const router = express.Router();
const usuarios = require('./usuarios');

router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Bem vindo a API!' });
});

router.get('/listar', async (req, res) => {
  res.status(200).json(usuarios.filter(Boolean));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id - 1;
  const usuario = usuarios[id];

  if (!usuario) {
    res.status(400).json({ message: 'Usuario não encontrado!' });
    return;
  } else {
    res.status(200).json(usuario);
  }
});

router.post('/', (req, res) => {
  const campos = ['nome', 'nome_usuario', 'senha'];

  campos.forEach((elemento) => {
    if (!req.body[elemento]) {
      res.status(400).json({ message: `${elemento} na requisição esta vazio` });
      return;
    }
  });

  const identificador = usuarios.length + 1;
  const { nome, nome_usuario, senha } = req.body;
  const ultimo_acesso = Date.now();

  usuarios.push({
    identificador,
    nome,
    nome_usuario,
    senha,
    ultimo_acesso,
  });

  res.status(200).json({ message: 'Cadastrado com sucesso! ' });
});

router.put('/:id', (req, res) => {
  const campos = ['nome', 'nome_usuario', 'senha'];

  campos.forEach((elemento) => {
    if (!req.body[elemento]) {
      res.send(400).json({ message: `${elemento} na requisição esta vazio` });
      return;
    }
  });

  const index = req.params.id - 1;
  const identificador = req.params.id;
  const { nome, nome_usuario, senha } = req.body;
  const ultimo_acesso = Date.now();

  usuarios[index] = {
    identificador,
    nome,
    nome_usuario,
    senha,
    ultimo_acesso,
  };
  res.status(200).json({ message: 'Cadastrado com sucesso!' });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id - 1;
  usuarios.splice(id, 1);
  res.status(200).json(usuarios);
});

module.exports = router;
