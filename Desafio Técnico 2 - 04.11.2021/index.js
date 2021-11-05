const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./model/conn/index');

Conn();

const port = 3000;

const usuariosRouter = require('./routers/usuarios.routes');
app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
