const express = require('express');
const router = express.Router();
const Cidade = require('../model/cidades');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de cidades funcionando!' });
});

router.get('/listall', async (req, res) => {
  await Cidade.find({})
    .then((cidades) => {
      console.log(cidades);
      res.status(200).json(cidades);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/listname/:name', async (req, res) => {
  const name = req.params.name;
  const cidade = await Cidade.find({ nome: name });
  if (cidade.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(cidade);
  }
});

router.post('/add', async (req, res) => {
  const { nome, qtdBairros, populacao, dtAniversario } = req.body;

  if (!nome || !qtdBairros || !populacao || !dtAniversario) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  } else {
    await Cidade.create(req.body)
      .then(() => {
        res.status(200).json({ message: 'Cadastrado com sucesso' });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
