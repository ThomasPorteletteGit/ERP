import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClientM from "./ListeClientM";
import AvantageCarteM from "./AvantageCarteM";

//a faire logique bouton enregistrer
const AjouterCarteM = ({liste_cartes_membres}) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');

        
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("buttonCarte") && event.target.classList.contains("Membre")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Voir liste clients":
                    afficherClients(liste_cartes_membres);
                    break;
                case "Avantage carte énergie":
                    voirAvantage(liste_cartes_membres);
                    break;
                case "Enregistrer":
                    break;
                case "Ajouter une carte":
                    ajouterCarte(liste_cartes_membres);
                    break;
                default:
                    break;
            }
            event.preventDefault();
        }
    });

    return (
        <section id='carte'>
            <div className="composantGrand">

                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <h2 className="component_title">Ajouter une carte</h2>
                        <hr></hr>
                    </div>

                    <button id="buttonCarteEM" className="buttonCarte Membre">Voir liste clients</button>
                    <button id="buttonCarteEM" className="buttonCarte Membre">Ajouter une carte</button>

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
                            <button id="buttonCarteEM" className="buttonCarte Membre" type="submit">Enregistrer</button>
                            <button id="buttonCarteEM" className="buttonCarte Membre" type="button">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};


function afficherClients(liste_cartes_membres) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<ListeClientM liste_cartes_membres={liste_cartes_membres}/>);
    divGeneral.style.display = "block";
}

function voirAvantage(liste_cartes_membres) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AvantageCarteM liste_cartes_membres={liste_cartes_membres} />);
    divGeneral.style.display = "block";
}

function ajouterCarte(liste_cartes_membres) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarteM liste_cartes_membres={liste_cartes_membres}/>);
    divGeneral.style.display = "block";
}

export default AjouterCarteM;