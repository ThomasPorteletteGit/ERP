import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server'
import CarteEnergie from "./CarteEnergie";
import SmallIcons from "../SmallIcons";

//a faire logique bouton enregistrer
const AjouterCarte = ({liste_cartes_energies}) => {
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
            type: 'Energie',
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
        await fetch('/cartesEnergie/add', options);
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("buttonCarte") && event.target.classList.contains("Energie")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Enregistrer":
                    const nom = document.querySelector(".infoClientCarte.nom input").value;
                    const prenom = document.querySelector(".infoClientCarte.prenom input").value;
                    const adresse = document.querySelector(".infoClientCarte.mail input").value;
                    enregistrerCarte({nom, prenom, adresse});
                    break;
                case "Annuler":
                    annuler();
                    break;
                case "Retour":
                    returnHome();
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
                        <button id="buttonReturn" className="buttonCarte">Retour</button>
                        <h2 className="component_title">Ajouter une carte</h2>
                        <hr></hr>
                    </div>


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
                            <h3>Adresse Mail:</h3>
                            <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
                        </div>

                        <div className="infoClientCarte">
                            <button id="buttonCarteEM" className="buttonCarte Energie" type="submit">Enregistrer</button>
                            <button id="buttonCarteEM" className="buttonCarte Energie" type="button">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};



function annuler() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<AjouterCarte />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

function returnHome() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<CarteEnergie />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}


export default AjouterCarte;