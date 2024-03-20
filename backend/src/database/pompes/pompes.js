const express = require('express');
const router = express.Router();

const { getAllPompes } = require('./pompesFunctions');

router.get('/get', (req, res) => {
    getAllPompes(req, res);
});