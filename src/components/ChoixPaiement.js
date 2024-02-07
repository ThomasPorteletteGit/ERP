import React from 'react';
import logo from '../assets/img/logo.png';

const Test = () => {
    return (
        <>
            <div className='choixPaiement'>
                <div className='header'>
                    <img id="logo" src={logo} alt="logo" />
                    <h1>Choix du paiement</h1>
                    <button id="backBtn">Retour</button>
                </div>

                <div className='paymentChoice'>
                    <button id="especeBtn">Espèces</button>
                    <button id="cbBtn">Carte bancaire</button>
                </div>
            </div >
        </>
    );
}

export default Test; 
