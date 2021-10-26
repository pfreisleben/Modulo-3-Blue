const express = require('express'); // Aqui eu importo o módulo express
const app = express(); // Aqui eu instancio o express na minh const server

//Aqui eu crio a rota que vai receber as requisições HTTP do tipo get na rota '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('Aqui é a rota GET do /');
});

// Aqui eu crio o servidor e defino a porta onde escutará as requisições

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000!');
});
