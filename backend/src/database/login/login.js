const express = require('express');
const router = express.Router();

const { login } = require('./loginFunctions');

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    login(username, password, (result) => {
        res.status(result.code).send(result);
    });
});

router.post('/getUserStatus', (req, res) => {
    //id à récupérer
    getUserStatus(req, res);
});

module.exports = router;