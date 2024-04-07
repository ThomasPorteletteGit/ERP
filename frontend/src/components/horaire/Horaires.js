import agrandir from '../../assets/img/agrandir.png';
import React, { useState } from 'react'; 

function SelectHeureMatin(jour) {
    const [heureMatin, setHeureMatin] = useState(jour.jour.horaire_ouverture);

    return (
        <div>
            <span className="rond-blanc">{heureMatin}</span> 
        </div>
    );
}

function SelectHeureSoir(jour) {
    const [heureSoir, setHeureSoir] = useState(jour.jour.horaire_fermeture);

    return (
        <div>
            <span className="rond-blanc">{heureSoir}</span> 
        </div>
    );
}


const Horaires = ({horaires}) => {
    return (
        <section id="horaires">
            <div className="horaires-container">
                <div className="top_container">
                    <div>
                        <h2>🕐Horaires</h2>
                        <div className='horaire-header'>
                            <h6>Ce sont les horaires d’ouverture et fermeture de votre boutique</h6>
                        </div>
                    </div>
                    <img src={agrandir} id="imgAgrandir" alt="agrandir" />
                </div>
                <div className='horaires-content'>
                    <table>
                        <thead>
                            <tr className='of'>
                                <th>Jour</th>
                                <th>Ouverture</th>
                                <th>Fermeture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {horaires.map((horaire) => {
                                return (
                                    <tr key={horaire.jour}>
                                        <td>{horaire.jour}</td>
                                        <td><SelectHeureMatin jour={horaire} /></td>
                                        <td><SelectHeureSoir jour={horaire} /></td>
                                    </tr>
                                );
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Horaires;
