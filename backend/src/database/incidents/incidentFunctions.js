const dao = require('../../data/DAO');

function getAllIncidents(req, res) {
    dao.select('*', 'Incident', "", (result) => {
        res.send(result.rows);
    });
}

function addIncident(req, res) {
    let values = "'" + req.body.date + "', '" + req.body.description + "', '" + req.body.niveau + "', '" + req.body.est_confirme + "'";
    let champs = "date, description, niveau, est_confirme";
    dao.insertWithoutId('Incident', champs, values, (result) => {
        res.send(result);
    });
}

function confirmIncident(req, res) {
    let attributes = "est_confirme = 'true'";
    let condition = "id_incident = '" + req.body.incidentId + "'";
    dao.update('Incident', attributes, condition, (result) => {
        res.send(result);
    });
}

function updateIncident(req, res) {
    let attributes = "date = '" + req.body.date + "', description = '" + req.body.description + "', niveau = '" + req.body.niveau + "'";
    let condition = "id_incident = '" + req.body.id + "'";
    dao.update('Incident', attributes, condition, (result) => {
        res.send(result);
    });
}

function deleteIncident(req, res) {
    let condition = "id_incident = '" + req.body.incidentId + "'";
    dao.delete('Incident', condition, (result) => {
        res.send(result);
    });
}

module.exports = {
    getAllIncidents,
    addIncident,
    updateIncident,
    confirmIncident,
    deleteIncident
};