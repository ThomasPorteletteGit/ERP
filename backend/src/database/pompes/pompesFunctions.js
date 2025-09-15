const dao = require('../../data/DAO');

function getAllPompes(req, res) {
    dao.selectOrderBy('*', 'Pompe', "", "id_pompe ASC", (result) => {
        res.send(result.rows);
    });
}

function getPompeById(req, res) {
    const id = req.params.id;
    dao.select('*', 'Pompe', `id_pompe = ${id}`, (result) => {
        res.send(result.rows[0]);
    });
}

function setPompeEtat(req, res) {
    const id = req.body.id;
    const statut = req.body.statut;
    dao.update('Pompe', `est_active = '${statut}'`, `id_pompe = ${id}`, (result) => {
        res.send(result.rows);
    });
}


module.exports = {
    getAllPompes,
    getPompeById,
    setPompeEtat
};