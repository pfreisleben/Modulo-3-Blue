const express = require('express');
const router = express.Router();
const Estado = require('../model/estados');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de estados funcionando!' });
});

router.get('/listall', async (req, res) => {
  await Estado.find({})
    .then((estados) => {
      console.log(estados);
      res.status(200).json(estados);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/listname/:name', async (req, res) => {
  const name = req.params.name;
  const estado = await Estado.find({ nome: name });
  if (estado.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(estado);
  }
});

router.post('/add', async (req, res) => {
  const { nome, regiao, populacao, vlrSalarioMin } = req.body;

  if (!nome || !regiao || !populacao || !vlrSalarioMin) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  } else {
    await Estado.create(req.body)
      .then(() => {
        res.status(200).json({ message: 'Cadastrado com sucesso' });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  const { nome, regiao, populacao, vlrSalarioMin } = req.body;

  const estado = await Estado.findById(id);

  if (!estado) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  if (!nome || !regiao || !populacao || !vlrSalarioMin) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  }
  await Estado.findOneAndUpdate({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Atualizado com sucesso!' });
  });
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  const estado = await Estado.findById(id);

  if (!estado) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  await Estado.deleteOne({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Deletado com sucesso!' });
  });
});

module.exports = router;
