import React from 'react';
import energies from '../../assets/img/bgcarteenergie.png';
import cash from '../../assets/img/cash.png';
import creditCard from '../../assets/img/cb.png';

const ChoixPaiement = () => {
    return (
        <section id="choixpaiement">
            <div className='component-title'>
                <h2 className='view-title'>💰 Paiement</h2>
            </div>
            <div className='choixPaiement'>
                <div className='paymentChoice'>
                    <button id="esp" className='cdpbouton'>
                        <p className="carte_text">CASH</p>
                        <img src={cash} id="emoji_cash" alt="cash" />
                    </button>
                    <button id="cb" className='cdpbouton'>
                        <p className="carte_text">CB</p>
                        <img src={creditCard} id="emoji_cb" alt="Cb" />
                    </button>
                    <button id="carteEnergie" className='cdpbouton'>
                        <p className="carte_text">ENERGIE</p>
                        <img src={energies} id="emoji_energie" alt="Carte Energie" />
                    </button>
                    {/* <button id="autre" className='cdpbouton'>Autres</button> */}
                </div>
            </div >
        </section>
    );
}

export default ChoixPaiement; 
