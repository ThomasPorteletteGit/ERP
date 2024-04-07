const express = require('express');
const router = express.Router();

const { getAllMemberCards, getMemberCardById, addMemberCard } = require('./cartesFunctions').membres;

router.get('/get', (req, res) => {
    getAllMemberCards(req, res);
});

router.get('/getId/:id_carte', (req, res) => {
    getMemberCardById(req, res);
});

router.post('/add', (req, res) => {
    addMemberCard(req, res);
});





module.exports = router;