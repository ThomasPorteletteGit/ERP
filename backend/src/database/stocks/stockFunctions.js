const dao = require('../../data/DAO');

// Fonctions pour les energies

function getAll(req, res) {
    dao.select('*', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

function getEnergieNames(req, res) {
    dao.select('nom', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

function getEnergieNamesAndQuantities(req, res) {
    dao.select('nom, quantite_stock', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

function getEnergieNamesAndPrices(req, res) {
    dao.select('nom, prix', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

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
    req.body.forEach((energie) => {
        dao.update('ProduitEnergie', `quantite_stock = quantite_stock + 1000`, `nom = '${energie}'`, (result) => {
            console.log(result);
        });
    });
}

function modiferPrixEnergie(req, res) {
    let prix = req.body;
    for (let energie in prix) {
        dao.update('ProduitEnergie', `prix = ${prix[energie]}`, `nom = '${energie}'`, (result) => {
            res.send(result);
        });
    }
}

// Fonctions pour les produits

function getProduitNames(req, res) {
    dao.select('nom', 'ProduitEnergie', "type='Produit'", (result) => {
        res.send(result.rows);
    });
}

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
        getAll,
        getEnergieNames,
        getEnergieNamesAndQuantities,
        getEnergieNamesAndPrices,
        getEnergieIds,
        getEnergieId,
        getEnergieStock,
        reapprovisionnerEnergie,
        modiferPrixEnergie
    },
    produits:
    {
        getProduitNames,
        getProduitIds,
        getProduitId,
        getProduitStock,
        reapprovisionnerProduit
    }
};