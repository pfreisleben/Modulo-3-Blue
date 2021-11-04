const mongoose = require('mongoose');

const Conn = async () => {
  await mongoose
    .connect('mongodb://localhost:27017/PROJETO2', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB esta conectado');
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = Conn;
