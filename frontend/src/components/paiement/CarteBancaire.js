import React, { useEffect } from 'react';

const CarteBancaire = () => {

    return (
        <div className="composantGrand">
            <div className="esp">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title2"> 💳Carte Bancaire</h2>
                    </div>
                </div>
                <div className='separator'></div>
                <div id="PayerCB">
                    <h1>Paiement</h1>
                    <div id="Produits" className="DivBlock">
                        <p id="prixCB">Prix total : <span id="prixTotal"></span> €</p>
                        <div id="ProduitsCB">
                            <p id="waitingCB">Suivre les instructions du TPE </p>
                            <p id="waitingCB">En attente du Paiement</p>
                            <div className='chargement'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarteBancaire;
