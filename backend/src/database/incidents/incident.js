const express = require('express');
const router = express.Router();

const { getAllIncidents, addIncident, updateIncident, confirmIncident, deleteIncident } = require('./incidentFunctions');

router.get('/get', (req, res) => {
    getAllIncidents(req, res);
});

router.post('/add', (req, res) => {
    addIncident(req, res);
});

router.put('/update', (req, res) => {
    updateIncident(req, res);
});

router.post('/confirm', (req, res) => {
    confirmIncident(req, res);
});

router.delete('/delete', (req, res) => {
    deleteIncident(req, res);
});

module.exports = router;