const express = require('express');
const router = express.Router();

const { getAll, getEnergieNames, getEnergieNamesAndQuantities, getEnergieNamesAndPrices ,getEnergieIds, getEnergieId, getEnergieStock, reapprovisionnerEnergie, modiferPrixEnergie } = require('./stockFunctions').energies;

router.get('/get', (req, res) => {
    getAll(req, res);
});

router.get('/names', (req, res) => {
    getEnergieNames(req, res);
});

router.get("/namesAndQuantities", (req, res) => {
    getEnergieNamesAndQuantities(req, res);
});

router.get("/namesAndPrices", (req, res) => {
    getEnergieNamesAndPrices(req, res);
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