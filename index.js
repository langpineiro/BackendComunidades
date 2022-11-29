const express = require('express');
const morgan = require('morgan');
const app = express();
const rutas = require('./Routes/index');
app.use(morgan('dev'));
app.use(express.json());
app.use('/',rutas);
const port = process.env.PORT || 4000; 
  app.listen(port, () => {
    console.log(' 🚀 El servidor ha despegado en el puerto ', port);
  });