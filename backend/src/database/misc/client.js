const express = require('express');
const router = express.Router();

const { getClientByNomPrenom, addClient } = require('./clientFunctions');

router.get('/get/:nom/:prenom', (req, res) => {
    getClientByNomPrenom(req, res);
});

router.post('/add', (req, res) => {
    addClient(req, res); 
});


module.exports = router;