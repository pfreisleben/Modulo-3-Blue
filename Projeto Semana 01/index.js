const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require('path');
const filmes = require('./filmes');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
// GET RAIZ
app.get('/', async (req, res) => {
  res.send('Olá bluemer! Você acabou de enviar um GET para /');
});

app.get('/filmes', async (req, res) => {
  res.send(filmes.filter(Boolean));
});

app.get('/filmes/:id', async (req, res) => {
  const id = --req.params.id;
  const filme = filmes[id];

  if (!filme) {
    res.send('Filme não encontrado');
    return;
  }

  res.send(filme);
});

app.post('/filmes', (req, res) => {
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

app.put('/filmes/:id', (req, res) => {
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

app.delete('/filmes/:id', (req, res) => {
  const id = --req.params.id;
  delete filmes[id];
  res.send('Filme exclúido com sucesso');
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
