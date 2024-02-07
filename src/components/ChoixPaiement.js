import React from 'react';
import logo from '../assets/img/logo.png';

const ChoixPaiement = () => {
    return (
        <>
            <div className='choixPaiement'>
                <h1 className='view-title'>Choix du paiement</h1>

                <div className='paymentChoice'>
                    <button id="especeBtn">Espèces</button>
                    <button id="cbBtn">Carte bancaire</button>
                </div>
            </div >
        </>
    );
}

export default ChoixPaiement; 
