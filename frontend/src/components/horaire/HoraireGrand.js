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
    const handleHeureOuverture = () => {

        
    };
    
    
    const handleHeureFermeture = () => {
      
    };

    const handleValider = () => {
        console.log("Validation des modifications");
    };

    const setHeureOuverture = (jour, heure) => {
       
    };

    const setHeureFermeture = (jour, heure) => {
    
    };

    const handleAnnuler = () => {
        console.log("Annulation des modifications");
        //a remet comme avant les modifs
    };


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
                    <button className='buttonAnnuler' onClick={() => handleAnnuler()}>Annuler</button>
                    <button className='buttonValider' onClick={() => handleValider()}>Valider</button>
                </div>
            </div>
        </section>
    );

}
export default HoraireGrand;