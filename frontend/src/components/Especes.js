import React from 'react';

const Especes = () => {
    return (
        <div className="composantGrand">
            <div className="esp">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title"> 💸Espèces</h2>
                    </div>
                    <div id="topComposant2">
                        <h4>Dernière mise à jour : <span id="lastUpdate">X</span> min</h4>
                        <button id="buttonUpdate">Actualiser ⟳</button>
                    </div>
                </div>
                <hr />
                <div id="PayerEspeces">
                    <h1>Paiement</h1>
                    <div id="Produits" className="DivBlock">
                        <table>
                            <tr>
                                <td id='liprod'>Produit: XX</td>
                                <td id='liprix'>Prix: XX</td>
                            </tr>
                            <tr>
                                <td id='liquant' colspan="2">Quantités: XX</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Especes; 
