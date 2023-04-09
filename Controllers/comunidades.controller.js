const express = require("express");
const {sequelize} = require("../Database/db");
const { QueryTypes } = require('sequelize');

const getComunidades = async (req, res) => {
    try {
        const comunidades  = await sequelize.query(`SELECT * FROM comunidadescompletas`, { type: QueryTypes.SELECT });
        res.json({data:comunidades});
    } catch (error) {
        console.error(error);
    }
}

const getDepartamentos = async (req, res) => {
    try {
        const departamentos  = await sequelize.query(`SELECT * FROM tbl_departamentos`, { type: QueryTypes.SELECT });
        res.json({data: departamentos});
    } catch (error) {
        console.error(error);
    }
}
const getMunicipios = async (req, res) => {
    try {
        const {id} = req.params; 
        const departamentos  = await sequelize.query(`SELECT * FROM tbl_municipios WHERE coddepartamento = ${id}`, { type: QueryTypes.SELECT });
        res.json({data: departamentos});
    } catch (error) {
        console.error(error);
    }
}
const getCategorias = async (req, res) => {
    try {
        const categorias  = await sequelize.query(`SELECT * FROM tbl_cat`, { type: QueryTypes.SELECT });
        res.json({data: categorias});
    } catch (error) {
        console.error(error);
    }
}
const saveComunidad = async (req, res) => {
    const {id,comunidad,coddepto,codmuni,codcategoria,coddistrito} =req.body
    console.log(id,comunidad,coddepto,codmuni,codcategoria,coddistrito);
    try {
        await sequelize.query(`CALL InsertarComunidad('${id}','${comunidad}', ${coddepto}, ${codmuni}, ${codcategoria}, ${coddistrito})`, { type: QueryTypes.SELECT });
        res.json({msg:"la comunidad ha sido agregada"});
    } catch (error) {
        console.error(error);
    }
}
const updateComunidad = async (req, res) => {
    const {comunidad,coddepto,codmuni,codcategoria,coddistrito,condicion} = req.body
    try {
        await sequelize.query(`CALL ActualizarComunidad('${comunidad}', ${coddepto}, ${codmuni}, ${codcategoria}, ${coddistrito}, '${condicion}')`, { type: QueryTypes.SELECT });
        res.json({msg:"la comunidad ha sido actualizada"});
    } catch (error) {
        console.error(error);
    }
}
const deleteComunidad = async (req, res) => {
    const {condicion} = req.params;
    try {
        await sequelize.query(`CALL EliminarComunidad('${condicion}')`, { type: QueryTypes.SELECT });
        res.json({msg:"la comunidad ha sido eliminada"});
    } catch (error) {
        console.error(error);
    }
}
const getDistritos = async (req, res) => {
    try {
        const distritos  = await sequelize.query(`SELECT * FROM tbl_distritos`, { type: QueryTypes.SELECT });
        res.json({
            data: distritos
        });
    } catch (error) {
        console.error(error);
    }
}
const getConsulta1 = async (req, res) => {
    try {
        const comunidades1  = await sequelize.query(`CALL localidadesDistrito5()`, { type: QueryTypes.SELECT });
        res.json({
            msg:"¿Cuáles son los nombres de comunidades del distrito 5?",
            data: comunidades1
        });
    } catch (error) {
        console.error(error);
    }
}
const getConsulta2 = async (req, res) => {
    try {
        const comunidades2  = await sequelize.query(`CALL ListadoMunicipiosConDistritos()`, { type: QueryTypes.SELECT });
        res.json({
            msg:"¿Qué municipios están en los diferentes distritos?",
            data: comunidades2
        });
    } catch (error) {
        console.error(error);
    }
}
const getConsulta3 = async (req, res) => {
    try {
        const comunidades3  = await sequelize.query(`CALL ListadoComunidadesConMunicipios()`, { type: QueryTypes.SELECT });
        res.json({
            msg:"Listar las comunidades ordenadas por municipios, debe mostrar el nombre de la comunidad y el nombre del municipio al que pertenece.",
            data: comunidades3
        });
    } catch (error) {
        console.error(error);
    }
}
const getConsulta4 = async (req, res) => {
    try {
        const comunidades4  = await sequelize.query(`CALL ListadoComunidadesConDistritos()`, { type: QueryTypes.SELECT });
        res.json({
            msg:"Listar las comunidades ordenadas por distrito, debe mostrar el nombre de la comunidad y el nombre del distrito al que pertenece.",
            data: comunidades4
        });
    } catch (error) {
        console.error(error);
    }
}
const getConsulta5 = async (req, res) => {
    try {
        const comunidades5  = await sequelize.query(`CALL ListadoComunidadesConCategorias()`, { type: QueryTypes.SELECT });
        res.json({
            msg:"Listar las comunidades por categoría, debe mostrar el nombre de la comunidad y el nombre de la categoría al que pertenece.",
            data: comunidades5
        });
    } catch (error) {
        console.error(error);
    }
}
module.exports  = {
    getComunidades,
    saveComunidad,
    updateComunidad,
    deleteComunidad,
    getConsulta1,
    getConsulta2,
    getConsulta3,
    getConsulta4,
    getConsulta5,
    getDepartamentos,
    getMunicipios,
    getCategorias,
    getDistritos
};