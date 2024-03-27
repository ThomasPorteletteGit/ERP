import React, { useEffect } from 'react';

const CarteEnergie = () => {

    return (
        <div className="composantGrand">
            <div className="esp">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title2"> 🔋Carte Energie</h2>
                    </div>
                </div>
                <hr />
                <div id="PayerCB">
                    <h1>Paiement</h1>
                    <div id="Produits" className="DivBlock">
                        <p id="prixCB">Prix total : <span id="prixTotal"></span> €</p>
                        <div id="ProduitsCB">
                            <p id="waitingCB">En attente du Paiement</p>
                            <div class='chargement'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarteEnergie;
