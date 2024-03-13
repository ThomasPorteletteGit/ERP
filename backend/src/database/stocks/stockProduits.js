const express = require('express');
const DAO = require('../../data/DAO');
const dao = new DAO();
const router = express.Router();

router.post('/getIdStockProduit', (req, res) => {
    let name = req.body.name;
    dao.select('id', 'ProduitEnergie', `nom='${name}'`, (result) => {
        res.send(result.rows);
    });
});

router.get('/getStockEnergie', (req, res) => {
    dao.select('*', 'ProduitEnergie', "type='Produit'", (result) => {
        res.send(result.rows);
    });
});

router.post('/reapprovisionnerStockProduit', (req, res) => {
    let id = req.body.id;
    let quantite = req.body.quantite;
    dao.update('ProduitEnergie', `quantite = quantite + ${quantite}`, `id = ${id}`, (result) => {
        res.send(result);
    });
});