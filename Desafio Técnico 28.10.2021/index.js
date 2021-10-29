const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require('path');
const usuarios = require('./usuarios');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// GET RAIZ

app.get('/read/:id', async (req, res) => {
  const identificador = req.params.id;
  const usuario = usuarios.find((filme) => {
    return filme.identificador == identificador;
  });

  if (!usuario) {
    res.send('Usuário não encontrado');
    return;
  } else {
    res.send(usuario);
  }
});

app.post('/create', (req, res) => {
  Object.keys(req.body).forEach((elemento) => {
    if (!req.body[elemento]) {
      return res.send('Por favor alimente todos os campos.');
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
  res.send(`Usuário ${nome} cadastrado com sucesso!`);
});

app.put('/update/:id', (req, res) => {
  Object.keys(req.body).forEach((elemento) => {
    if (!req.body[elemento]) {
      return res.send('Por favor alimente todos os campos.');
    }
  });

  const index = req.params.id - 1;

  const identificador = req.params.id;

  if (
    !usuarios.find((usuario) => {
      return (identificador = usuario.identificador);
    })
  ) {
    return res.send('Usuário não encontrado');
  } else {
    const { nome, nome_usuario, senha } = req.body;
    const ultimo_acesso = Date.now();

    usuarios[index] = {
      identificador,
      nome,
      nome_usuario,
      senha,
      ultimo_acesso,
    };
    res.send(`Usuário ${nome} atualizado com sucesso!`);
  }
});

app.delete('/delete/:id', (req, res) => {
  const index = req.params.id - 1;
  const identificador = req.params.id;
  if (
    !usuarios.find((usuario) => {
      return (identificador = usuario.identificador);
    })
  ) {
    res.send('Usuário não encontrado!');
  } else {
    usuarios.splice(index, 1);
    res.send(`Usuário ${req.params.id} excluído com sucesso!`);
  }
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
