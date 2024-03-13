const express = require('express');
const cors = require('cors');
const app = express();

const incidentRoutes = require('./src/database/incidents/incident');
const stockEnergieRoutes = require('./src/database/stocks/stockEnergie');
const stockProduitsRoutes = require('./src/database/stocks/stockProduits');
const transactionRoutes = require('./src/database/transactions/transaction');

app.use('/incident', incidentRoutes);
app.use('/stockEnergie', stockEnergieRoutes);
app.use('/stockProduits', stockProduitsRoutes);
app.use('/transaction', transactionRoutes);


app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;