const express = require('express');
const router = express.Router();
const filmes = require('./filmes');

router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Bem vindo a API!' });
});

router.get('/listar', async (req, res) => {
  res.status(200).json(filmes.filter(Boolean));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];

  if (!filme) {
    res.status(400).json({ message: 'Filme não encontrado!' });
    return;
  } else {
    res.status(200).json(filme);
  }
});

router.post('/', (req, res) => {
  const campos = ['filme', 'lancamento', 'direcao'];

  campos.forEach((elemento) => {
    if (!req.body[elemento]) {
      res.status(400).json({ message: `${elemento} na requisição esta vazio` });
      return;
    }
  });

  const numero = filmes.length + 1;
  const { filme, lancamento, direcao } = req.body;

  filmes.push({
    numero,
    filme,
    lancamento,
    direcao,
  });

  res.status(200).json({ message: 'Cadastrado com sucesso! ' });
});

router.put('/:id', (req, res) => {
  const campos = ['filme', 'lancamento', 'direcao'];

  campos.forEach((elemento) => {
    if (!req.body[elemento]) {
      res.send(400).json({ message: `${elemento} na requisição esta vazio` });
      return;
    }
  });

  const index = req.params.id - 1;
  const numero = req.params.id;
  const { filme, lancamento, direcao } = req.body;

  filmes[index] = {
    numero,
    filme,
    lancamento,
    direcao,
  };
  res.status(200).json({ message: 'Editado com sucesso!' });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id - 1;
  filmes.splice(id, 1);
  res.status(200).json(filmes);
});

module.exports = router;
