import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoixPaiement from './components/paiement/ChoixPaiement';
import MontantAPayer from './components/MontantAPayer';
import Panier from './components/caisse/Panier';
import Dashboard from './components/Dashboard';
import ConnexionId from './components/connexion/ConnexionId';
import ConnexionPassword from './components/connexion/ConnexionPassword';

import './styles/App.css';
import './styles/main.css';
import './styles/index.css';
import './styles/header.css';
import './styles/icons.css'
import './styles/choixdupaiement.css';
import './styles/login.css';

function App() {
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const cookieValue = document.cookie.split('=')[1];
    if (cookieValue === undefined) {
      return;
    }
    const userType = cookieValue === 'Gerant' ? 'gerant' : 'employe';
    setUserType(userType);
  }, []);

  let dashboardElement;
  if (userType === "gerant") {
    dashboardElement = <Dashboard userType="gerant" />;
  } else if(userType === "employe") {
    dashboardElement = <Dashboard userType="employe" />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ConnexionId userType={userType}/>} />
          <Route path="/choixpaiement" element={<ChoixPaiement />} />
          <Route path="/montant-a-payer" element={<MontantAPayer />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/dashboard" element={dashboardElement} />
          <Route path="/connexion" element={<ConnexionId />} />
          <Route path="/connexionPassword" element={<ConnexionPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
