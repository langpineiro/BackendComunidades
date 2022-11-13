const { Sequelize } = require('sequelize');
require('dotenv').config();
const {DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME} = process.env;
const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: 'mysql',
});
 sequelize.authenticate().then(() => {
  console.log('Conexion satisfactoria a mysql');
}).catch((error) => {
  console.error('no se pudo conectar ', error);
});


module.exports = {sequelize};