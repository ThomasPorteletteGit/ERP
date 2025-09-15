import React, { useEffect, useState } from 'react';

function SelectHeure({onChange, jour, horaire}) {


    const handleChange = (e) => {
        const nouvelleHeure = e.target.value;
        onChange(nouvelleHeure);
    };
    

  
    return (
        <select className='horaires' onChange={(e) => handleChange(e)}>
            {
                [...Array(24).keys()].map(i =>
                    [0, 30].map(j => {
                        let heureFormat = (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j);
                        
                        if (heureFormat === horaire.substring(0,5) || heureFormat === horaire.substring(0,5)) {
                            return <option value={heureFormat} key={heureFormat} selected>{heureFormat}</option>
                        }
                        else {
                            return <option value={heureFormat} key={heureFormat}>{heureFormat}</option>
                        }
                    })
                )      
            }       
        </select>
    );
}

const HoraireGrand = ({horaires}) => {
   

    const handleValider = async () => {
        let newHoraires = [];
        let horaires = document.querySelectorAll('.horaires');
        let i = 0;
        for (let horaire of horaires) {
            if (i % 2 === 0) {
                newHoraires.push({
                    jour: horaire.parentElement.parentElement.firstChild.textContent,
                    horaire_ouverture: horaire.value,
                    horaire_fermeture: horaires[i + 1].value
                });
            }
            i++;
        }
        for(let horaire of newHoraires) {
            const dataOuverture = {jour: horaire.jour, heure: horaire.horaire_ouverture};
            const dataFermeture = {jour: horaire.jour, heure: horaire.horaire_fermeture};
            const optionsOuverture = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataOuverture)
            };
            const optionsFermeture = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataFermeture)
            };

            await fetch('/horaires/ouverture/set', optionsOuverture)
            await fetch('/horaires/fermeture/set', optionsFermeture).then(response => response.json()).then(data => {
                window.location.reload();
            });
        }

      
        
    };


    const handleAnnuler = () => {
        console.log("Annulation des modifications");
        //a remet comme avant les modifs
    };

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btnHoraireGrandClick")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Valider":
                    handleValider();
                    break;
                case "Annuler":
                    handleAnnuler();
                    break;
                default:
                    break;
            }
        }
    });


    return (
        <section id="modifHoraire">
            <div className="composantGrand">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title2"> 🕐Horaires</h2>
                    </div>
                </div>
                <div className='separator'></div>
                <div className="tableauHeure">
                    <table>
                        <thead>
                            <tr className='of'>
                                <th>Jour</th>
                                <th>Ouverture</th>
                                <th>Fermeture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                horaires.map(jour => {
                                    return (
                                        <tr>
                                            <td>{jour.jour}</td>
                                            <td>
                                                <SelectHeure className="ouverture" jour={jour.jour} horaire={jour.horaire_ouverture}/>
                                            </td>
                                            <td>
                                                <SelectHeure className="fermeture" jour={jour.jour} horaire={jour.horaire_fermeture}/>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <button className='btnHoraireGrandClick buttonAnnuler button_style'>Annuler</button>
                    <button className='btnHoraireGrandClick buttonValider button_style'>Valider</button>
                </div>
            </div>
        </section>
    );

}
export default HoraireGrand;