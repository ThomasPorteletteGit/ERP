const dao = require('../../data/DAO');

// Fonctions pour les cartes energie

function getAllEnergyCards(req, res) {
    dao.selectWithJoin('*', 'Carte', "type='Energie'", "JOIN Client ON Carte.id_client=Client.id_client", (result) => {
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
    dao.insertWithoutId('Carte', champs, valeurs, (result) => {
        res.send(result);
    });
}

function deleteEnergyCard(req, res) {
    let id_carte = req.body.id_carte;
    console.log(id_carte);
    dao.delete('Carte', `id_carte=${id_carte}`, (result) => {
        res.send(result);
    });
}

// Fonctions pour les cartes membre

function getAllMemberCards(req, res) {
    dao.selectWithJoin('*', 'Carte', "type='Membre'", "JOIN Client ON Carte.id_client=Client.id_client", (result) => {
        res.send(result.rows);
    });
}

function getMemberCardById(req, res) {
    dao.selectWithJoin('*', 'Carte', `type='Membre' AND id_carte=${req.params.id_carte}`, "JOIN Client ON Carte.id_client=Client.id_client", (result) => {
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

function deleteMemberCard(req, res) {
    let id_carte = req.body.id_carte;
    dao.delete('Carte', `id_carte=${id_carte}`, (result) => {
        res.send(result);
    });
}



module.exports = {
    energies:
    {
        getAllEnergyCards,
        getEnergyCardById,
        addEnergyCard,
        deleteEnergyCard
    },
    membres:
    {
        getAllMemberCards,
        getMemberCardById,
        addMemberCard,
        deleteMemberCard
    }

}