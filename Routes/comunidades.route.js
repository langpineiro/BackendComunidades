const express = require('express');
const { join } = require('path');
const router = express();

const {getComunidades, saveComunidad, updateComunidad, deleteComunidad, getConsulta1, getConsulta2, getConsulta3, getConsulta4, getConsulta5, getDepartamentos,getMunicipios, getCategorias, getDistritos} = require('../Controllers/comunidades.controller');

//rutas de CRUD sobre tabla COMUNIDADES EN BD EN LA NUBE
router.get('/',getComunidades);
router.post('/guardar', saveComunidad);
router.put('/editar', updateComunidad );
router.delete('/eliminar/:condicion', deleteComunidad );
router.get('/departamentos', getDepartamentos); 
router.get('/municipiosSegunDepa/:id', getMunicipios);
router.get('/categorias', getCategorias);
router.get('/distritos', getDistritos); 
//rutas para las consultas de la tarea 2
// router.get('/pregunta1', getConsulta1);
// router.get('/pregunta2', getConsulta2);
// router.get('/pregunta3', getConsulta3);
// router.get('/pregunta4', getConsulta4);
// router.get('/pregunta5', getConsulta5); 

module.exports = router;