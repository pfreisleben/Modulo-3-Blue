const express = require('express');
const router = express.Router();
const Cidade = require('../model/cidades');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de cidades funcionando!' });
});

router.get('/listar', async (req, res) => {
  await Cidade.find({})
    .then((cidades) => {
      console.log(cidades);
      res.status(200).json(cidades);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
