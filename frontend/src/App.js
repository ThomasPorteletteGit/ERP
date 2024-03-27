import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoixPaiement from './components/paiement/ChoixPaiement';
import MontantAPayer from './components/MontantAPayer';
import Panier from './components/Panier';
import Dashboard from './components/Dashboard';
import ConnexionId from './components/connexion/ConnexionId';
import ConnexionPassword from './components/connexion/ConnexionPassword';

import './styles/App.css';
import './styles/main.css';
import './styles/index.css';
import './styles/header.css';
import './styles/icons.css'



function App() {

  const [routing, setRouting] = useState(<ConnexionId />);

  useEffect(() => {
    let sessionCookie = document.cookie.split('=')[1] || "";

    if (sessionCookie === "") {
      setRouting(<ConnexionId />);
    }
    else {
      setRouting(<Dashboard userType="employe" />);
      // setRouting(<Dashboard userType="gérant"/>);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={routing} />
          <Route path="/choix-paiement" element={<ChoixPaiement />} />
          <Route path="/montant-a-payer" element={<MontantAPayer />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/dashboard" element={<Dashboard userType="employe" />} />
          <Route path="/connexion" element={<ConnexionId />} />
          <Route path="/connexionPassword" element={<ConnexionPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
