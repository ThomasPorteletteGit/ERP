const express = require('express');
const router = express.Router();

const { getAllHoraires, getHorairesByDay, getHorairesOuvertureByDay, getHorairesFermetureByDay } = require('./horairesFunctions');

router.get('/get', (req, res) => {
    getAllHoraires(req, res);
});

router.get('/get/:jour', (req, res) => {
    getHorairesByDay(req, res);
});

router.get('/get/ouverture/:jour', (req, res) => {
    getHorairesOuvertureByDay(req, res);
});

router.get('/get/fermeture/:jour', (req, res) => {
    getHorairesFermetureByDay(req, res);
});

router.post('/set/ouverture/:jour/:heure', (req, res) => {
    setHoraireOuverture(req, res);
});

router.post('/set/fermeture/:jour/:heure', (req, res) => {
    setHoraireFermeture(req, res);
});



module.exports = router;