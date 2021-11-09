const express = require('express');
const router = express.Router();
const Pais = require('../model/paises');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de pais funcionando!' });
});

router.get('/listall', async (req, res) => {
  await Pais.find({})
    .then((pais) => {
      console.log(pais);
      res.status(200).json(pais);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/listname/:name', async (req, res) => {
  const name = req.params.name;
  const pais = await Pais.find({ nome: name });
  if (pais.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(pais);
  }
});

router.post('/add', async (req, res) => {
  const { nome, populacao, linguaMae, pib } = req.body;

  if (!nome || !populacao || !linguaMae || !pib) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  } else {
    await Pais.create(req.body)
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
  const { nome, populacao, linguaMae, pib } = req.body;

  const pais = await Pais.findById(id);

  if (!pais) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  if (!nome || !populacao || !linguaMae || !pib) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  }
  await Pais.findOneAndUpdate({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Atualizado com sucesso!' });
  });
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  const pais = await Pais.findById(id);

  if (!pais) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  await Pais.deleteOne({ _id: id }, req.body).then(() => {
    res.status(200).json({ message: 'Deletado com sucesso!' });
  });
});

module.exports = router;
