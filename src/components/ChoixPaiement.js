import React from 'react';
import Header from './Header';

const ChoixPaiement = () => {
    return (
        <>  
            <Header />
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
