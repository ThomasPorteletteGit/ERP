const dao = require('../../data/DAO');

function getAllHoraires(req, res) {
    dao.select('*', 'Boutique', "", (result) => {
        res.send(result.rows);
    });
}

function getHorairesByDay(req, res) {
    const jour = req.params.jour;
    dao.select('horaire_ouverture, horaire_fermeture', 'Boutique', `jour = '${jour}'`, (result) => {
        res.send(result.rows[0]);
    });
}

function getHorairesOuvertureByDay(req, res) {
    const jour = req.params.jour;
    dao.select('horaire_ouverture', 'Boutique', `jour = '${jour}'`, (result) => {
        res.send(result.rows[0]);
    });
}

function getHorairesFermetureByDay(req, res) {
    const jour = req.params.jour;
    dao.select('horaire_fermeture', 'Boutique', `jour = '${jour}'`, (result) => {
        res.send(result.rows[0]);
    });
}


function setHoraireOuverture(req, res) {
    const jour = req.body.jour;
    const heure = req.body.heure;
    dao.update('Boutique', `horaire_ouverture = '${heure}'`, `jour = '${jour}'`, (result) => {
        res.send(result.rows);
    });
}

function setHoraireFermeture(req, res) {
    const jour = req.body.jour;
    const heure = req.body.heure;
    dao.update('Boutique', `horaire_fermeture = '${heure}'`, `jour = '${jour}'`, (result) => {
        res.send(result.rows);
    });
}


module.exports = {
    getAllHoraires,
    getHorairesByDay,
    setHoraireOuverture,
    setHoraireFermeture,
    getHorairesOuvertureByDay,
    getHorairesFermetureByDay
};