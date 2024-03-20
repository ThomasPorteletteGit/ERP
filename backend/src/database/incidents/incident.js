const express = require('express');
const router = express.Router();

const { getAllIncidents, addIncident, updateIncident, deleteIncident } = require('./incidentFunctions');

router.get('/get', (req, res) => {
    getAllIncidents(req, res);
});

router.post('/add', (req, res) => {
    addIncident(req, res);
});

router.put('/update', (req, res) => {
    updateIncident(req, res);
});

router.delete('/delete', (req, res) => {
    deleteIncident(req, res);
});

module.exports = router;