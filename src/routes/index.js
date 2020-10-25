const { Router } = require('express');
const path = require('path');
const router = Router();
const Trago = require('../models/Trago')
const Reto = require('../models/Reto')

router.get('/', (req, res) => {
    res.render('Inicio.html');
});

router.get('/participantes', (req, res) => {
    res.render('participantes.html');
});

router.get('/probabilidad', (req, res) => {
    res.render('probabilidad.html');
});

router.get('/tragos', async (req, res) => {
    const tragos = await Trago.find();
    res.render('tragos.html' , {tragos: tragos});
});

router.get('/agregarreto', (req, res) => {

    res.render('agregarreto.html');
})

router.get('/api/retos' , async (req, res) => {
    const retos = await Reto.find();
    res.json(retos);
});

router.post('/agregarreto', async (req, res) => {
    const reto = new Reto();

    reto.reto = req.body.reto;
 
  
    await reto.save();

    res.redirect('/agregarreto');

    
})

router.get('/agregartrago', (req, res) => {
    res.render('agregartrago.html');
});

router.post('/agregartrago', async (req, res) => {
    const trago = new Trago();
    trago.nombre = req.body.nombre;
    trago.ingredientes = req.body.ingredientes;
    trago.preparacion = req.body.preparacion;
    trago.graduacion = req.body.graduacion;
    trago.filename = req.file.filename;
    trago.path = 'img/uploads/' + req.file.filename;

    await trago.save();

    res.redirect('/tragos');
});

router.get('/api/tragos' , async (req, res) => {
    const tragos = await Trago.find();
    res.json(tragos);
});

module.exports = router;