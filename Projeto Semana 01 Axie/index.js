const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require('path');
const axies = require('./axies');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// GET RAIZ
app.get('/', async (req, res) => {
  res.send('Olá bluemer! Você acabou de enviar um GET para /');
});

app.get('/axies', async (req, res) => {
  res.send(axies.filter(Boolean));
});

app.get('/axies/:id', async (req, res) => {
  const id = --req.params.id;
  const axie = axies[id];

  if (!axie) {
    res.send('Axie não encontrado');
    return;
  }

  res.send(axie);
});

app.post('/axies', (req, res) => {
  Object.keys(req.body).forEach((elemento) => {
    if (!req.body[elemento]) {
      return res.send('Por favor alimente todos os campos.');
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
  res.send(axies);
});

app.put('/axies/:id', (req, res) => {
  Object.keys(req.body).forEach((elemento) => {
    if (!req.body[elemento]) {
      return res.send('Por favor alimente todos os campos.');
    }
  });

  const numero = req.params.id - 1;
  const id = req.params.id;
  const { classe, breed_count, owner, stats } = req.body;

  axies[numero] = {
    id,
    classe,
    breed_count,
    owner,
    stats,
  };
  res.send(axies);
});

app.delete('/axies/:id', (req, res) => {
  const id = --req.params.id;
  delete axies[id];
  res.send(axies);
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
