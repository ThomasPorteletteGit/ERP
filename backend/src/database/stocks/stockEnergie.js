const express = require('express');
const router = express.Router();

const {getProduitIds, getProduitId, getProduitStock, reapprovisionnerProduit } = require('./stockProduits');

router.get('/getIds', (req, res) => {
    getProduitIds(req, res);
});

router.post('/getId', (req, res) => {
    getProduitId(req, res);
});

router.get('/getStock', (req, res) => {
    getProduitStock(req, res);
});

router.post('/reapprovisionner', (req, res) => {
    reapprovisionnerProduit(req, res);
});


module.exports = router;