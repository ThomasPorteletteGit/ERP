import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoixPaiement from './components/ChoixPaiement';
import MontantAPayer from './components/MontantAPayer';
import Panier from './components/Panier';
import Dashboard from './components/Dashboard';
import ConnexionId from './components/ConnexionId';
import ConnexionPassword from './components/ConnexionPassword';

import './styles/App.css';
import './styles/main.css';
import './styles/index.css';
import './styles/header.css';
import './styles/icons.css'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/choix-paiement" element={<ChoixPaiement />} />
          <Route path="/montant-a-payer" element={<MontantAPayer />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connexion" element={<ConnexionId />} />
          <Route path="/connexionPassword" element={<ConnexionPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
