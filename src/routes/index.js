const { Router } = require('express');
const path = require('path');
const router = Router();
const Trago = require('../models/Trago')
const TragoP=require("../models/TragoPropuesto")
const Reto = require('../models/Reto')
const {updatetrago, deletetrago, obtenerPropuestos, deletetragoP } = require('../controllers/tragos.controller');
const {renderSignUpForm, renderSigninForm, signin, signup, logout } = require('../controllers/users.controller') 


router.get('/', (req, res) => {
    res.render('Inicio.html');
});

router.get('/participantes', (req, res) => {
    res.render('participantes.html');
});

router.get('/reproductor', (req, res) => {

    res.render('reproductor.html');
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
    const trago = new TragoP();
    trago.nombre = req.body.nombre;
    trago.ingredientes = req.body.ingredientes;
    trago.preparacion = req.body.preparacion;
    trago.graduacion = req.body.graduacion;
    trago.filename = req.file.filename;
    trago.path = 'img/uploads/' + req.file.filename;
    await trago.save();
    res.redirect('/tragos');
});

router.post('/agregartragoP', async (req, res) => {
    const trago = new Trago();
    trago.nombre = req.body.nombre;
    trago.ingredientes = req.body.ingredientes;
    trago.preparacion = req.body.preparacion;
    trago.graduacion = req.body.graduacion;

    await trago.save();
    await TragoP.findByIdAndDelete(req.body.id);

    res.redirect('/tragos');
});

router.post('/agregartragoacarta', async (req, res) => {
    const trago = new TragoP();
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

router.get('/obtenerPropuestos', obtenerPropuestos)

router.put('/editartrago/', updatetrago)

router.delete('/deletetrago/:id', deletetrago)

router.delete('/deletetragoP/:id', deletetragoP)

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSigninForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

router.get('/getUser');




module.exports = router;