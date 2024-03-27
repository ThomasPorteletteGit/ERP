import React, { useState } from 'react';

const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

function SelectHeure({ onChange, valeurInitiale, jour}) {
    const [heure, setHeure] = useState(valeurInitiale);

    const handleChange = (e) => {
        const nouvelleHeure = e.target.value;
        setHeure(nouvelleHeure);
        onChange(nouvelleHeure);
    };

    const getHoraireOuverture = (jour) => {
        fetch('/horaires/ouverture/get/'+jour)
        .then(response => response.json())
        .then(data => {
            console.log(data.heure_ouverture);
            return data.heure_ouverture;
        })
    };
    
    const getHoraireFermeture = (jour) => {
        fetch('/horaires/fermeture/get/'+jour)
        .then(response => response.json())
        .then(data => {
            console.log(data.heure_fermeture);
            return data.heure_fermeture;
        })
    };

    const horaireOuverture = getHoraireOuverture(jour);
    const horaireFermeture = getHoraireFermeture(jour);


    return (
        <select className='horaires' onChange={handleChange} value={heure}>
            {
                [...Array(24).keys()].map(i =>
                    [0, 30].map(j => {
                        let heureFormat = (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j);
                        if (heureFormat === horaireOuverture || heureFormat === horaireFermeture) {
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
    const [heureOuverture, setHeureOuverture] = useState("06:00");
    const [heureFermeture, setHeureFermeture] = useState("22:00");
    
    const handleHeureOuverture = () => {
        console.log("jour : ");
        const heures = document.querySelector('.horaires');
        console.log(heures);

    //     const nouvelleHeure = document.querySelector('.heures')
    //     console.log(nouvelleHeure);
    //     console.log("Nouvelle heure d'ouverture : " + nouvelleHeure);
    //     setHeureOuverture(nouvelleHeure);
    //     setHeureFermetureDb(nouvelleHeure);
    };
    
    const handleHeureFermeture = () => {
        // console.log("jour : " + jour);
        // const nouvelleHeure = document.querySelector('.heures')[jours.indexOf(jour)].value;
        // console.log("Nouvelle heure de fermeture : " + nouvelleHeure);
        // setHeureFermeture(nouvelleHeure);
        // setHeureFermetureDb(nouvelleHeure);
    };

    const handleValider = () => {
        //pour enregistrer dans la bd
        console.log("Nouvelles valeurs sauvegardées :", heureOuverture, heureFermeture);

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
                            <tr>
                                <td>Lundi</td>
                                <td><SelectHeure
                                        onChange={handleHeureOuverture} 
                                        valeurInitiale={heureOuverture} 
                                        jour={"Lundi"}
                                        />
                                </td>
                                <td><SelectHeure 
                                        onChange={handleHeureFermeture} 
                                        valeurInitiale={heureFermeture} 
                                        jour={"Lundi"}
                                        /></td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td><SelectHeure 
                                        onChange={handleHeureOuverture} 
                                        valeurInitiale={heureOuverture}
                                        jour={"Mardi"}
                                    />
                                </td>
                                <td>
                                    <SelectHeure 
                                        onChange={handleHeureFermeture} 
                                        valeurInitiale={heureFermeture} 
                                        jour={"Mardi"}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td><SelectHeure 
                                        onChange={handleHeureOuverture} 
                                        valeurInitiale={heureOuverture} 
                                        jour={"Mercredi"}
                                        /></td>
                                <td><SelectHeure 
                                        onChange={handleHeureFermeture} 
                                        valeurInitiale={heureFermeture}
                                        jour={"Mercredi"}
                                        /></td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td><SelectHeure 
                                        onChange={handleHeureOuverture} 
                                        valeurInitiale={heureOuverture} 
                                        jour={"Jeudi"}
                                        /></td>
                                <td><SelectHeure 
                                        onChange={handleHeureFermeture} 
                                        valeurInitiale={heureFermeture} 
                                        jour={"Jeudi"}
                                        /></td>
                            </tr>
                            <tr>
                                <td>Vendredi</td>
                                <td><SelectHeure 
                                        onChange={handleHeureOuverture} 
                                        valeurInitiale={heureOuverture}
                                        jour={"Vendredi"}
                                        /></td>
                                <td><SelectHeure 
                                        onChange={handleHeureFermeture} 
                                        valeurInitiale={heureFermeture} 
                                        jour={"Vendredi"}
                                        /></td>
                            </tr>
                            <tr>
                                <td>Samedi</td>
                                <td><SelectHeure 
                                        onChange={handleHeureOuverture} 
                                        valeurInitiale={heureOuverture} 
                                        jour={"Samedi"}
                                        /></td>
                                <td><SelectHeure 
                                        onChange={handleHeureFermeture} 
                                        valeurInitiale={heureFermeture} 
                                        jour={"Samedi"}
                                        /></td>
                            </tr>
                            <tr>
                                <td>Dimanche</td>
                                <td><SelectHeure 
                                        onChange={handleHeureOuverture} 
                                        valeurInitiale={heureOuverture} 
                                        jour={"Dimanche"}
                                        /></td>
                                <td><SelectHeure 
                                        onChange={handleHeureFermeture} 
                                        valeurInitiale={heureFermeture} 
                                        jour={"Dimanche"}
                                        /></td>
                            </tr>
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