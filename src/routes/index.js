const { Router } = require('express');
const path = require('path');
const router = Router();

router.get('/', (req, res) => {
    res.render('Inicio.html');
});

router.get('/participantes', (req, res) => {
    res.render('participantes.html');
});

router.get('/probabilidad', (req, res) => {
    res.render('probabilidad.html');
});

router.get('/tragos', (req, res) => {
    res.render('tragos.html');
});

//router.get('/Agregar')
module.exports = router;