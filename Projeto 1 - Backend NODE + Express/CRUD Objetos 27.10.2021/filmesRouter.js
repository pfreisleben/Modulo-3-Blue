const express = require('express');
const filmes = require('./filmes');
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Bem vindo a API!' });
});

router.get('/filmes', async (req, res) => {
  res.send(filmes.filter(Boolean));
});

router.get('/filmes/:id', async (req, res) => {
  const id = --req.params.id;
  const filme = filmes[id];

  if (!filme) {
    res.send('Filme não encontrado');
    return;
  }

  res.send(filme);
});

router.post('/filmes', (req, res) => {
  Object.keys(req.body).forEach((elemento) => {
    if (!req.body[elemento]) {
      return res.send('Por favor alimente todos os campos.');
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

  res.send(filmes);
});

router.put('/filmes/:id', (req, res) => {
  Object.keys(req.body).forEach((elemento) => {
    if (!req.body[elemento]) {
      return res.send('Por favor alimente todos os campos.');
    }
  });

  const id = req.params.id - 1;
  const numero = req.params.id;
  const { filme, lancamento, direcao } = req.body;

  filmes[id] = {
    numero,
    filme,
    lancamento,
    direcao,
  };
  res.send(filmes);
});

router.delete('/filmes/:id', (req, res) => {
  const id = --req.params.id;
  delete filmes[id];
  res.send('Filme exclúido com sucesso');
});

module.exports = router;
