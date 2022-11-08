const express = require('express');
const morgan = require('morgan');
const app = express();
const rutas = require('./Routes/index');
app.use(morgan('dev'));
app.use(express.json());
app.use('/',rutas);

  app.listen(4000, () => {
    console.log(' 🚀 El servidor ha despegado en el puerto 4000!');
  });