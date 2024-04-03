const express = require('express');
const router = express.Router();

const { getEnergieNames, getEnergieIds, getEnergieId, getEnergieStock, reapprovisionnerEnergie, modiferPrixEnergie } = require('./stockFunctions').energies;

router.get('/', (req, res) => {
    testDb(req, res);
});

router.get('/names', (req, res) => {
    getEnergieNames(req, res);
});

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

router.post("/modifierPrix", (req, res) => {
    modiferPrixEnergie(req, res);
});
module.exports = router;