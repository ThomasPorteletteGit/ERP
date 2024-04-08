const dao = require('../../data/DAO');

function getClientByNomPrenom(req, res) {
    dao.select('*', 'Client', `nom='${req.params.nom}' AND prenom='${req.params.prenom}'`, (result) => {
        res.send(result.rows);
    });
}

function addClient(req, res) {
    let champs = 'nom, prenom, adresse_mail';
    let values = `'${req.body.nom}', '${req.body.prenom}', '${req.body.adresse}'`;
    dao.insertWithoutId('Client', champs, values, (result) => {
        res.send(result);
    });
}

module.exports = {
    getClientByNomPrenom,
    addClient
};