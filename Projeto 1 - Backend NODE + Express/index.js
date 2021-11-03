const express = require('express');
const app = express();

app.use(express.json());

const filmesRouter = require('./filmesRouter');
app.use('/filmes', filmesRouter);

const axiesRouter = require('./axiesRouter');
app.use('/axies', axiesRouter);

const usuariosRouter = require('./usuariosRouter');
app.use('/usuarios', usuariosRouter);

app.listen(3000, () =>
  console.log(`Servidor rodando em http://localhost:3000`)
);
