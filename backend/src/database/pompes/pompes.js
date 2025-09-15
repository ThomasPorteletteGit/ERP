const express = require('express');
const router = express.Router();

const { getAllPompes, getPompeById, setPompeEtat } = require('./pompesFunctions');

router.get('/get', (req, res) => {
    getAllPompes(req, res);
});

router.get('/get/:id', (req, res) => {
    getPompeById(req, res);
});

router.post('/setState/', (req, res) => {
    setPompeEtat(req, res);
});
module.exports = router;