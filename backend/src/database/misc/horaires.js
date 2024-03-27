const express = require('express');
const router = express.Router();

const { getAllHoraires, getHorairesByDay } = require('./horairesFunctions');

router.get('/get', (req, res) => {
    getAllHoraires(req, res);
});

router.get('/get/:jour', (req, res) => {
    getHorairesByDay(req, res);
});

module.exports = router;