import React, { useEffect, useState } from 'react';

function SelectHeure({onChange, jour, horaire}) {


    const handleChange = (e) => {
        const nouvelleHeure = e.target.value;
        onChange(nouvelleHeure);
    };
    

  
    return (
        <select className='horaires' onChange={handleChange}>
            {
                [...Array(24).keys()].map(i =>
                    [0, 30].map(j => {
                        let heureFormat = (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j);
                        
                        if (heureFormat === horaire || heureFormat === horaire) {
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

const HoraireGrand = ({}) => {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const handleHeureOuverture = () => {

        
    };
    
    
    const handleHeureFermeture = () => {
      
    };

    const handleValider = () => {

    };

    const setHeureOuvertureDb = (jour, heure) => {
        fetch('/horaires/ouverture/set/'+jour+'/'+heure)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    };


    const setHeureFermetureDb = (jour, heure) => {
        fetch('/horaires/fermeture/set/'+jour+'/'+heure)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    };

    const handleAnnuler = () => {
        console.log("Annulation des modifications");
        //a remet comme avant les modifs
    };

    const getHoraireOuverture = async (jour) => {
        let horaire;
        await fetch('/horaires/ouverture/get/'+jour)
        .then(response => response.json())
        .then(data => {
            horaire = data.horaire_ouverture;
        });
        return horaire;

    };
 
    const getHoraireFermeture = async (jour) => {
        let horaire;
        await fetch('/horaires/fermeture/get/'+jour)
        .then(response => response.json())
        .then(data => {
            horaire = data.horaire_fermeture;
        });
        return horaire;
    }


    return (
        <section id="modifHoraire">
            <div className="composantGrand">
                <div className="Top_Component_Grand">
                    <h2 className="component_title">🕐Horaires</h2>
                    <hr></hr>
                </div>
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
                                jours.map(async jour => {
                                    const horaire_ouverture = await getHoraireOuverture(jour);
                                    const horaire_fermeture = await getHoraireFermeture(jour);
                                    return (
                                        <tr>
                                            <td>{jour}</td>
                                            <td>
                                                <SelectHeure onChange={setHeureOuvertureDb} jour={jour} horaire={horaire_ouverture}/>
                                            </td>
                                            <td>
                                                <SelectHeure onChange={setHeureFermetureDb} jour={jour} horaire={horaire_fermeture}/>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <button className='buttonAnnuler' onClick={handleAnnuler}>Annuler</button>
                    <button className='buttonValider' onClick={handleValider}>Valider</button>
                </div>
            </div>
        </section>
    );

}
export default HoraireGrand;