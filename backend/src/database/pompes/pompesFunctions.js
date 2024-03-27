const dao = require('../../data/DAO');

function getAllPompes(req, res) {
    dao.select('*', 'Pompe', "", (result) => {
        res.send(result.rows);
    });
}

module.exports = {
    getAllPompes,
};