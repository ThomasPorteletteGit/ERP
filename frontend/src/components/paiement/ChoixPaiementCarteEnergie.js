import React, { useEffect } from 'react';
import instance from '../misc/Singleton';
const ChoixPaiementCarteEnergie = () => {

    return (
        <div className="composantGrand">
            <div className="esp">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title2"> 🔋Carte Energie</h2>
                    </div>
                </div>
                <div className='separator'></div>
                <div id="PayerCB">
                    <h1>Paiement</h1>
                    <div id="Produits" className="DivBlock">
                        <p id="prixCB">Prix total : <span id="prixTotal">{instance.getPrixTotal()}</span> €</p>
                        <div id="ProduitsCB">
                            <p id="waitingCB">En attente du Paiement</p>
                            <div className='chargement'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoixPaiementCarteEnergie;
