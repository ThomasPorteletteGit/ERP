const Especes = () => {

    document.addEventListener("click", function (event) {
        const btnajouter = document.getElementById('buttonPayer');
        const inputEspeces = document.getElementById('inputEspeces');
        const prixTotal = document.getElementById('prixTotal');

        const handleClick = () => {
            let value = inputEspeces.value;
            value = prixTotal.innerHTML - value;
            prixTotal.innerHTML = value;
            inputEspeces.value = '';
        };

        if (btnajouter && inputEspeces) {
            btnajouter.addEventListener('click', handleClick);
            inputEspeces.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    handleClick();
                }
            });

            return () => {
                btnajouter.removeEventListener('click', handleClick);
            };
        }
    });

    return (
        <div className="composantGrand">
            <div className="esp">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title2"> 💸Espèces</h2>
                    </div>
                </div>
                <hr />

                <div id="PayerEspeces">
                    <h1>Paiement</h1>
                    <div id="Produits" className="DivBlock">
                        <p id="prixespece">Prix total : <span id="prixTotal"></span> €</p>
                        <div id="ProduitsEspeces">
                            <input type="text" id="inputEspeces" placeholder="Montant en €" pattern="[0-9]*" />
                            <button id="buttonPayer" >Ajouter</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Especes;
