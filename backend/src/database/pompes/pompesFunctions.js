const DAO = require('../../data/DAO');
const dao = new DAO();

function getAllPompes(req, res) {
    dao.select('*', 'Pompe', "", (result) => {
        res.send(result.rows);
    });
}

module.exports = {
    getAllPompes,
};