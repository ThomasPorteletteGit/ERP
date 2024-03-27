const dao = require('../../data/DAO');

function getAllHoraires(req, res) {
    dao.select('*', 'Horaire', "", (result) => {
        res.send(result.rows);
    });
}

function getHorairesByDay(req, res) {
    const jour = req.params.jour;
    dao.select('heure_ouverture, heure_fermeture', 'Horaire', `WHERE jour = '${jour}'`, (result) => {
        res.send(result.rows);
    });
}

function getHorairesOuvertureByDay(req, res) {
    const jour = req.params.jour;
    dao.select('heure_ouverture', 'Horaire', `WHERE jour = '${jour}'`, (result) => {
        res.send(result.rows);
    });
}

function getHorairesFermetureByDay(req, res) {
    const jour = req.params.jour;
    dao.select('heure_fermeture', 'Horaire', `WHERE jour = '${jour}'`, (result) => {
        res.send(result.rows);
    });
}


function setHoraireOuverture(req, res) {
    const jour = req.params.jour;
    const heure = req.params.heure;
    dao.update('Horaire', `heure_ouverture = '${heure}'`, `WHERE jour = '${jour}'`, (result) => {
        res.send(result.rows);
    });
}

function setHoraireFermeture(req, res) {
    const jour = req.params.jour;
    const heure = req.params.heure;
    dao.update('Horaire', `heure_fermeture = '${heure}'`, `WHERE jour = '${jour}'`, (result) => {
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