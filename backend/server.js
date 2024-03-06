const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));


const DAO = require('./src/data/DAO');

const dao = new DAO();

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.json({ dao: dao.dbIp });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;