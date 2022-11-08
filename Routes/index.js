const express = require('express');
const router = express();
const comunidades = require('./comunidades.route');
//this route will come with all comunidades
router.use('/comunidades',comunidades);
module.exports = router; 