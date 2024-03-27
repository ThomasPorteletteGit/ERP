const dao = require('../../data/DAO');

// Fonctions pour les energies
function getEnergieIds(req, res) {
    dao.select('id', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

function getEnergieId(req, res) {
    let name = req.body.name;
    dao.select('id', 'ProduitEnergie', `nom='${name}'`, (result) => {
        res.send(result.rows);
    });
}

function getEnergieStock(req, res) {
    dao.select('*', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

function reapprovisionnerEnergie(req, res) {
    let id = req.body.id;
    let quantite = req.body.quantite;
    dao.update('ProduitEnergie', `quantite = quantite + ${quantite}`, `id = ${id}`, (result) => {
        res.send(result);
    });
}

// Fonctions pour les produits

function getProduitIds(req, res) {
    dao.select('id', 'ProduitEnergie', "type='Produit'", (result) => {
        res.send(result.rows);
    });
}

function getProduitId(req, res) {
    let name = req.body.name;
    dao.select('id', 'ProduitEnergie', `nom='${name}'`, (result) => {
        res.send(result.rows);
    });
}

function getProduitStock(req, res) {
    dao.select('*', 'ProduitEnergie', "type='Produit'", (result) => {
        res.send(result.rows);
    });
}

function reapprovisionnerProduit(req, res) {
    let id = req.body.id;
    let quantite = req.body.quantite;
    dao.update('ProduitEnergie', `quantite = quantite + ${quantite}`, `id = ${id}`, (result) => {
        res.send(result);
    });
}

module.exports = {
    energies:
    {
        getEnergieIds,
        getEnergieId,
        getEnergieStock,
        reapprovisionnerEnergie
    },
    produits:
    {
        getProduitIds,
        getProduitId,
        getProduitStock,
        reapprovisionnerProduit
    }
};