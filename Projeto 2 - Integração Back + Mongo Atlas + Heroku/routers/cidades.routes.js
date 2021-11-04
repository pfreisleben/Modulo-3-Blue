const express = require('express');
const router = express.Router();
const Cidade = require('../model/cidades');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de cidades funcionando!' });
});

module.exports = router;
