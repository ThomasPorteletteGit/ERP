import React, { useState } from 'react';

function SelectHeure({ onChange, valeurInitiale }) {
    const [heure, setHeure] = useState(valeurInitiale);

    const handleChange = (e) => {
        const nouvelleHeure = e.target.value;
        setHeure(nouvelleHeure);
        onChange(nouvelleHeure);
    };

    return (
        <select className='heures' onChange={handleChange} value={heure}>
            {[...Array(24).keys()].map(i =>
                [0, 30].map(j => {
                    let heureFormat = (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j);
                    return <option value={heureFormat} key={heureFormat}>{heureFormat}</option>
                })
            )}
        </select>
    );
}

const HoraireGrand = ({ }) => {
    const [heureOuverture, setHeureOuverture] = useState("06:00");
    const [heureFermeture, setHeureFermeture] = useState("22:00");

    const handleHeureOuverture = (nouvelleHeure) => {
        console.log("Nouvelle heure d'ouverture : " + nouvelleHeure);
        setHeureOuverture(nouvelleHeure);
    };

    const handleHeureFermeture = (nouvelleHeure) => {
        console.log("Nouvelle heure de fermeture : " + nouvelleHeure);
        setHeureFermeture(nouvelleHeure);
    };

    const handleValider = () => {
        //pour enregistrer dans la bd
        console.log("Nouvelles valeurs sauvegardées :", heureOuverture, heureFermeture);

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
                            <tr>
                                <td>Lundi</td>
                                <td><SelectHeure
                                    onChange={handleHeureOuverture}
                                    valeurInitiale={heureOuverture} />
                                </td>
                                <td><SelectHeure
                                    onChange={handleHeureFermeture}
                                    valeurInitiale={heureFermeture} /></td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td><SelectHeure
                                    onChange={handleHeureOuverture}
                                    valeurInitiale={heureOuverture}
                                />
                                </td>
                                <td>
                                    <SelectHeure
                                        onChange={handleHeureFermeture}
                                        valeurInitiale={heureFermeture}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td><SelectHeure
                                    onChange={handleHeureOuverture}
                                    valeurInitiale={heureOuverture} /></td>
                                <td><SelectHeure
                                    onChange={handleHeureFermeture}
                                    valeurInitiale={heureFermeture} /></td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td><SelectHeure
                                    onChange={handleHeureOuverture}
                                    valeurInitiale={heureOuverture} /></td>
                                <td><SelectHeure
                                    onChange={handleHeureFermeture}
                                    valeurInitiale={heureFermeture} /></td>
                            </tr>
                            <tr>
                                <td>Vendredi</td>
                                <td><SelectHeure
                                    onChange={handleHeureOuverture}
                                    valeurInitiale={heureOuverture} /></td>
                                <td><SelectHeure
                                    onChange={handleHeureFermeture}
                                    valeurInitiale={heureFermeture} /></td>
                            </tr>
                            <tr>
                                <td>Samedi</td>
                                <td><SelectHeure
                                    onChange={handleHeureOuverture}
                                    valeurInitiale={heureOuverture} /></td>
                                <td><SelectHeure
                                    onChange={handleHeureFermeture}
                                    valeurInitiale={heureFermeture} /></td>
                            </tr>
                            <tr>
                                <td>Dimanche</td>
                                <td><SelectHeure
                                    onChange={handleHeureOuverture}
                                    valeurInitiale={heureOuverture} /></td>
                                <td><SelectHeure
                                    onChange={handleHeureFermeture}
                                    valeurInitiale={heureFermeture} /></td>
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