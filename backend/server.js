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

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.json({ message: 'Welcome back, admin!' });
    } else {
        res.json({ message: 'Invalid credentials' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;