const express = require('express');
const router = express.Router();
const axies = require('./axies');

router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Bem vindo a API!' });
});

router.get('/listar', async (req, res) => {
  res.status(200).json(axies.filter(Boolean));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id - 1;
  const axie = axies[id];

  if (!axie) {
    res.status(400).json({ message: 'Axie não encontrado!' });
    return;
  } else {
    res.status(200).json(axie);
  }
});

router.post('/', (req, res) => {
  const campos = ['classe', 'breed_count', 'owner', 'stats'];

  campos.forEach((elemento) => {
    if (!req.body[elemento]) {
      res.status(400).json({ message: `${elemento} na requisição esta vazio` });
      return;
    }
  });

  const id = axies.length + 1;
  const { classe, breed_count, owner, stats } = req.body;

  axies.push({
    id,
    classe,
    breed_count,
    owner,
    stats,
  });

  res.status(200).json({ message: 'Cadastrado com sucesso! ' });
});

router.put('/:id', (req, res) => {
  const campos = ['classe', 'breed_count', 'owner', 'stats'];

  campos.forEach((elemento) => {
    if (!req.body[elemento]) {
      res.send(400).json({ message: `${elemento} na requisição esta vazio` });
      return;
    }
  });

  const index = req.params.id - 1;
  const id = req.params.id;
  const { classe, breed_count, owner, stats } = req.body;

  axies[index] = {
    id,
    classe,
    breed_count,
    owner,
    stats,
  };
  res.send(200).json({ message: 'Cadastrado com sucesso!' });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id - 1;
  axies.splice(id, 1);
  res.status(200).json(axies);
});

module.exports = router;
