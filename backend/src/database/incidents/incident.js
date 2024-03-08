const express = require('express');
const DAO = require('../../data/DAO');
const dao = new DAO();
const router = express.Router();

router.get('/getIncidents', (req, res) => {
    dao.select('*', 'Incident', "", (result) => {
        res.send(result.rows);
    });
});

router.post('/addIncident', (req, res) => {
    let values = "'" + req.body.id + "', '" + req.body.date + "', '" + req.body.description + "', '" + req.body.niveau + "'";
    dao.insert('Incident', values, (result) => {
        res.send(result);
    });
});

router.put('/updateIncident', (req, res) => {
    let attributes = "date = '" + req.body.date + "', description = '" + req.body.description + "', niveau = '" + req.body.niveau + "'";
    let condition = "id = '" + req.body.id + "'";
    dao.update('Incident', attributes, condition, (result) => {
        res.send(result);
    });
});

router.delete('/deleteIncident', (req, res) => {
    let condition = "id = '" + req.body.id + "'";
    dao.delete('Incident', condition, (result) => {
        res.send(result);
    });
});

module.exports = router;

