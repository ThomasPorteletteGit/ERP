import Header from './components/Header.js';
import ChoixPaiement from './components/ChoixPaiement.js';
import MontantAPayer from './components/MontantAPayer.js';
import './styles/App.css';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ChoixPaiement />
      {/* <MontantAPayer /> */}
    </div>
  );
}

export default App;
