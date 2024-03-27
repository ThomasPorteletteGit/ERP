const express = require('express');
const router = express.Router();

const {getEnergieIds, getEnergieId, getEnergieStock, reapprovisionnerEnergie } = require('./stockFunctions');

router.get('/getIds', (req, res) => {
    getEnergieIds(req, res);
});

router.post('/getId', (req, res) => {
    getEnergieId(req, res);
});

router.get('/getStock', (req, res) => {
    getEnergieStock(req, res);
});

router.post('/reapprovisionner', (req, res) => {
    reapprovisionnerEnergie(req, res);
});

module.exports = router;