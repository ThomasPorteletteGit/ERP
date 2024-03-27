const dao = require('../../data/DAO');

function getAllIncidents(req, res) {
    dao.select('*', 'Incident', "", (result) => {
        res.send(result.rows);
    });
}

function addIncident(req, res) {
    let values = "'" + req.body.id + "', '" + req.body.date + "', '" + req.body.description + "', '" + req.body.niveau + "'";
    dao.insert('Incident', values, (result) => {
        res.send(result);
    });
}

function updateIncident(req, res) {
    let attributes = "date = '" + req.body.date + "', description = '" + req.body.description + "', niveau = '" + req.body.niveau + "'";
    let condition = "id = '" + req.body.id + "'";
    dao.update('Incident', attributes, condition, (result) => {
        res.send(result);
    });
}

function deleteIncident(req, res) {
    let condition = "id = '" + req.body.id + "'";
    dao.delete('Incident', condition, (result) => {
        res.send(result);
    });
}

module.exports = {
    getAllIncidents,
    addIncident,
    updateIncident,
    deleteIncident
};