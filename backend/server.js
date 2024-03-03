const express = require('express');
const cors = require('cors');
const app = express();

const DAO = require('./src/data/DAO');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json({ message: 'Jason Derulo' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;