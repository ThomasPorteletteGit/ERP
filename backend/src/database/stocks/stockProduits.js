const express = require('express');
const router = express.Router();

const { getAllProduits, getProduitNames, getProduitIds, getProduitFromId, getProduitId, getProduitStock, reapprovisionnerProduit, addProduit } = require('./stockFunctions').produits;

router.get('/get', (req, res) => {
    getAllProduits(req, res);
});

router.get('/names', (req, res) => {
    getProduitNames(req, res);
});

router.get('/getIds', (req, res) => {
    getProduitIds(req, res);
});

router.get("/get/:id", (req, res) => {
    getProduitFromId(req, res);
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

router.post('/add', (req, res) => {
    addProduit(req, res);
});


module.exports = router;