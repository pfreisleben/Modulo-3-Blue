const mongoose = require('mongoose');

const Conn = async () => {
  await mongoose
    .connect('mongodb+srv://pedro:12345@cluster0.8axru.mongodb.net/desafiotecnico?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB esta conectado');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Conn;
