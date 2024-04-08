const dao = require('../../data/DAO');

// Fonctions pour les cartes energie

function getAllEnergyCards(req, res) {
    dao.select('*', 'Carte', "type='Energie'", (result) => {
        res.send(result.rows);
    });
}

function getEnergyCardById(req, res) {
    dao.select('*', 'Carte', `type='Energie' AND id_carte=${req.params.id_carte}`, (result) => {
        res.send(result.rows);
    });
}

function addEnergyCard(req, res) {
    let champs = 'type, credit, id_client';
    let valeurs = `'Energie', ${req.body.credit}, ${req.body.id_client}`;
    dao.insert('Carte', champs, valeurs, (result) => {
        res.send(result);
    });
}

// Fonctions pour les cartes membre

function getAllMemberCards(req, res) {
    dao.select('*', 'Carte', "type='Membre'", (result) => {
        res.send(result.rows);
    });
}

function getMemberCardById(req, res) {
    dao.select('*', 'Carte', `type='Membre' AND id_carte=${req.params.id_carte}`, (result) => {
        res.send(result.rows);
    });
}

function addMemberCard(req, res) {
    let champs = 'type, credit, id_client';
    let valeurs = `'Membre', ${req.body.credit}, ${req.body.id_client}`;
    dao.insertWithoutId('Carte', champs, valeurs, (result) => {
        res.send(result);
    });
}



module.exports = {
    energies:
    {
        getAllEnergyCards,
        getEnergyCardById,
        addEnergyCard
    },
    membres:
    {
        getAllMemberCards,
        getMemberCardById,
        addMemberCard
    }

}