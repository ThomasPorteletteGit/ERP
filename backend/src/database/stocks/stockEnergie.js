const express = require('express');
const DAO = require('../../data/DAO');
const dao = new DAO();
const router = express.Router();

router.post('/getIdStockEnergie', (req, res) => {
    let name = req.body.name;
    dao.select('id', 'ProduitEnergie', `nom='${name}'`, (result) => {
        res.send(result.rows);
    });
});

router.get('/getStockEnergie', (req, res) => {
    dao.select('*', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
});

router.post('/reapprovisionnerStockEnergie', (req, res) => {
    let id = req.body.id;
    let quantite = req.body.quantite;
    dao.update('ProduitEnergie', `quantite = quantite + ${quantite}`, `id = ${id}`, (result) => {
        res.send(result);
    });
});