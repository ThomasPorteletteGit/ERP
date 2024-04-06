const express = require('express');
const router = express.Router();

const { login, getUserStatus } = require('./loginFunctions');

router.post('/', (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const password = req.body.password;
    login(nom, prenom, password, (result) => {
        res.status(result.code).send(result);
    });
});

router.post('/getUserStatus', (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    getUserStatus(nom, prenom, (result) => {
        res.status(result.code).send(result);
    });
});

module.exports = router;