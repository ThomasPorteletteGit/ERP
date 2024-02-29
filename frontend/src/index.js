import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App /> // Pas de stictMode car sinon double requête à l'API et nous sommes limités en nombre de requêtes
);

reportWebVitals();
