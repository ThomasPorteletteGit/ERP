const dao = require('../../data/DAO');

// Fonctions pour les energies

function getAll(req, res) {
    dao.selectOrderBy('*', 'ProduitEnergie', "type='Energie'" ,'id_produit_energie ASC', (result) => {
        res.send(result.rows);
    });
}

function getEnergieFromId(req, res) {
    let id = req.params.id;
    dao.select('*', 'ProduitEnergie', `id_produit_energie=${id}`, (result) => {
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
    dao.select('id_produit_energie', 'ProduitEnergie', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

function getEnergieId(req, res) {
    let name = req.params.nom;
    dao.select('id_produit_energie', 'ProduitEnergie', `nom='${name}'`, (result) => {
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
    console.log(req.body);
    const objects = req.body;
    let queries = [];
    objects.map((array) => {
        queries.push(`UPDATE ProduitEnergie SET prix = ${array.prix} WHERE nom = '${array.nom}'`);
    });
    dao.mutliUpdate(queries, (result) => {
        res.send(result);
    });
}

// Fonctions pour les produits

function getProduitNames(req, res) {
    dao.select('nom', 'ProduitEnergie', "type='Produit'", (result) => {
        res.send(result.rows);
    });
}

function getProduitIds(req, res) {
    dao.select('id_produit_energie', 'ProduitEnergie', "type='Produit'", (result) => {
        res.send(result.rows);
    });
}

function getProduitFromId(req, res) {
    let id = req.params.id;
    dao.select('*', 'ProduitEnergie', `id_produit_energie=${id} AND type='Produit'`, (result) => {
        res.send(result.rows);
    });
}

function getProduitId(req, res) {
    let name = req.body.name;
    dao.select('id_produit_energie', 'ProduitEnergie', `nom='${name} `, (result) => {$
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
    dao.update('ProduitEnergie', `quantite = quantite + ${quantite}`, `id_produit_energie= ${id}`, (result) => {
        res.send(result);
    });
}

module.exports = {
    energies:
    {
        getAll,
        getEnergieFromId,
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
        getProduitFromId,
        getProduitId,
        getProduitStock,
        reapprovisionnerProduit
    }
};