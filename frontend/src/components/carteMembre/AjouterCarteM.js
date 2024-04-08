import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClientM from "./ListeClientM";
import AvantageCarteM from "./AvantageCarteM";

//a faire logique bouton enregistrer
const AjouterCarteM = ({liste_cartes_membres}) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');

        
    const creerUtilisateur = async ({nom, prenom, adresse}) => {
        let id_client;
        await fetch(`/client/get/${nom}/${prenom}`)
            .then(response => response.json())
            .then(data => {
                if(data.length === 0){
                    const data = {
                        nom: nom,
                        prenom: prenom,
                        adresse: adresse
                    }
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }
                    fetch('/client/add', options)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            id_client = data.id_client;
                        });
                }
                else {
                    console.log(data);
                    id_client = data[0].id_client;
                }
            });

            return id_client;
        }

    const enregistrerCarte = async ({nom, prenom, adresse}) => {
        let id_client = await creerUtilisateur({nom, prenom, adresse});
        const data = {
            type: 'Membre',
            credit: 0,
            id_client: id_client
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch('/cartesMembre/add', options);
    }
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
                    const nom = document.querySelector(".infoClientCarte.nom input").value;
                    const prenom = document.querySelector(".infoClientCarte.prenom input").value;
                    const adresse = document.querySelector(".infoClientCarte.mail input").value;
                    console.log(nom, prenom, adresse)
                    enregistrerCarte({nom, prenom, adresse});
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
                        <div className="infoClientCarte nom">
                            <h3>Nom :</h3>
                            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
                        </div>
                        <div className="infoClientCarte prenom">
                            <h3>Prénom :</h3>
                            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                        </div>
                        <div className="infoClientCarte mail">
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