import React from 'react';
import Header from './Header';

const ChoixPaiement = () => {
    return (
        <section id="choix-paiement">
            <div className='choixPaiement'>
                <h2 className='view-title'>Choix du paiement</h2>
                <div className='paymentChoice'>
                    <button id="esp">Espèces</button>
                    <button id="cb">Carte bancaire</button>
                    <button id="carteEnergie">Carte énergie</button>
                    <button id="autre">Autres</button>
                </div>
            </div >
        </section>
    );
}

export default ChoixPaiement; 
