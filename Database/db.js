const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bxtzuwybmaiie3qrjodr', 'upyu3xcvtab2gupi', 'LfPgGMZXNXP1ZcKeLfzC', {
  host: 'bxtzuwybmaiie3qrjodr-mysql.services.clever-cloud.com',
  dialect: 'mysql',
});
 sequelize.authenticate().then(() => {
  console.log('Conexion satisfactoria a mysql');
}).catch((error) => {
  console.error('no se pudo conectar ', error);
});


module.exports = {sequelize};