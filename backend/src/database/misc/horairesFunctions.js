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

module.exports = {
    getAllHoraires,
    getHorairesByDay
};