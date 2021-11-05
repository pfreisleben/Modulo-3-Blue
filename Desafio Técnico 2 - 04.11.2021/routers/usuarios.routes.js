const express = require('express');
const router = express.Router();
const Usuario = require('../model/usuarios');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Rota de usuarios funcionando!' });
});

router.get('/readall', async (req, res) => {
  const usuario = await Usuario.find({});
  if (usuario.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(usuario);
  }
});

router.get('/read/:id', async (req, res) => {
  const id = req.params.id;
  const usuario = await Usuario.find({ _id: id });
  if (usuario.length === 0) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  } else {
    res.status(200).json(usuario);
  }
});

router.post('/create', async (req, res) => {
  const { nome, nomeUsuario, senha, dtUltimoAcesso } = req.body;

  if (!nome || !nomeUsuario || !senha || !dtUltimoAcesso) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  } else {
    await Usuario.create(req.body)
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
  const { nome, nomeUsuario, senha, dtUltimoAcesso } = req.body;

  const usuario = await Usuario.findById(id);

  if (!usuario) {
    res.status(404).send({ message: 'Objeto não encontrado' });
    return;
  }

  if (!nome || !nomeUsuario || !senha || !dtUltimoAcesso) {
    res
      .status(400)
      .send({ messagem: 'Objeto inválido. Algum campo está com valor vazio.' });
    return;
  }

  await Usuario.findOneAndUpdate({ _id: id }, req.body).then(() => {
    res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
  });
});

module.exports = router;
