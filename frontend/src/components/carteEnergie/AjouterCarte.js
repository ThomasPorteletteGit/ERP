import React, {useState} from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClient from "./ListeClient";
import AvantageCarte from "./AvantageCarte";

//a faire logique bouton enregistrer
const AjouterCarte = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');

    return (
        <section id='carte'>
            <div className="composantGrandCarteEM">
                <div className="Top_Component_Grand">
                    <h2 className="component_title">Ajouter une carte</h2>
                    <hr></hr>
                </div>

                <button id="buttonCarteEM" className="buttonCarte">Voir liste des clients</button>
                <button id="buttonCarteEM" className="buttonCarte">Ajouter une carte</button>

                <form>
                    <div className="infoClientCarte">
                        <h3>Nom :</h3>
                        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
                    </div>
                    <div className="infoClientCarte">
                        <h3>Prénom :</h3>
                        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                    </div>
                    <div className="infoClientCarte">
                        <h3>Adresse :</h3>
                        <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
                    </div>

                    <div className="infoClientCarte">
                        <button id="buttonCarteEM" className="buttonCarte" type="submit">Enregistrer</button>
                        <button id="buttonCarteEM" className="buttonCarte" type="button">Annuler</button>
                    </div>
                </form>
            </div>
        </section>
    );
};


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonCarte")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Voir liste client":
                console.log("Bouton liste client -> liste client cliqué");
                afficherClients();
                break;
            case "Avantage carte énergie":
                console.log("Bouton avantage cliqué");
                voirAvantage();
                break;
            case "Enregistrer":
                console.log("Bouton enregister cliqué");
                
                break;
                case "Annuler":
                console.log("Bouton annuler cliqué");
                annuler();
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
    }
});

function afficherClients() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;
    console.log("Afficher les clients");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<ListeClient />);
    divGeneral.style.display = "block";
}

function voirAvantage(){
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;
    console.log("Afficher les clients");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AvantageCarte />);
    divGeneral.style.display = "block";
}

function annuler(){
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;
    console.log("annuler");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarte />);
    divGeneral.style.display = "block";
}

export default AjouterCarte;