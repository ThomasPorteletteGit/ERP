import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ChoixPaiement from './components/ChoixPaiement';
import MontantAPayer from './components/MontantAPayer';
import Panier from './components/Panier';
import Dashboard from './components/Dashboard';
import './styles/App.css';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/choix-paiement" component={ChoixPaiement} />
          <Route path="/montant-a-payer" component={MontantAPayer} />
          <Route path="/panier" component={Panier} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
