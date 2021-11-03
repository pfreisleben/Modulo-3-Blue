const express = require('express');
const app = express();

app.use(express.json());

const filmesRouter = require('./filmesRouter');
app.use('/filmes', filmesRouter);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
