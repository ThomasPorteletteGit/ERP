import React from 'react';

const ChoixPaiement = () => {
    return (
        <section id="choix-paiement">
            <div className='choixPaiement'>
                <h2 className='view-title'>Choix du paiement</h2>
                <div className='paymentChoice'>
                    <button id="esp" className='cdpbouton'>Espèces</button>
                    <button id="cb" className='cdpbouton'>Carte bancaire</button>
                    <button id="carteEnergie" className='cdpbouton'>Carte énergie</button>
                    {/* <button id="autre" className='cdpbouton'>Autres</button> */}
                </div>
            </div >
        </section>
    );
}

export default ChoixPaiement; 
