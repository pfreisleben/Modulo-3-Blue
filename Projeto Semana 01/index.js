require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require('path');
const filmes = require('./filmes');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
// GET RAIZ
app.get('/', async (req, res) => {
  res.send(filmes);
});

app.get('/filmes', async (req, res) => {
  res.send(filmes.filter(Boolean));
});

app.get('/filmes/:id', async (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];

  if (!filme) {
    res.send('Filme não encontrado');
    return;
  }

  res.send(filme);
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
