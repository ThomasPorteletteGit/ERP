const express = require('express');
const router = express.Router();

const { getAllEnergyCards, getEnergyCardById, addEnergyCard } = require('./cartesFunctions').energies;

router.get('/get', (req, res) => {
    getAllEnergyCards(req, res);
});

router.get('/getId/:id_carte', (req, res) => {
    getEnergyCardById(req, res);
});

router.post('/add', (req, res) => {
    addEnergyCard(req, res);
});

module.exports = router;