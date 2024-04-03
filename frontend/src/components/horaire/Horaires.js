import agrandir from '../../assets/img/agrandir.png';
import React, { useState } from 'react'; 

function SelectHeureMatin(jour) {
    const [heureMatin, setHeureMatin] = useState("6h");


    return (
        <div>
            <span className="rond-blanc">{heureMatin}</span> 
        </div>
    );
}

function SelectHeureSoir(jour) {
    const [heureSoir, setHeureSoir] = useState("22h");


    return (
        <div>
            <span className="rond-blanc">{heureSoir}</span> 
        </div>
    );
}


const Horaires = () => {

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
                            <tr>
                                <td>Lundi</td>
                                <td>{SelectHeureMatin("Lundi")}</td>
                                <td>{SelectHeureSoir("Lundi")}</td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td>{SelectHeureMatin("Mardi")}</td>
                                <td>{SelectHeureSoir("Lundi")}</td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td>{SelectHeureMatin("Mercredi")}</td>
                                <td>{SelectHeureSoir("Mercredi")}</td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td>{SelectHeureMatin("Jeudi")}</td>
                                <td>{SelectHeureSoir("Jeudi")}</td>
                            </tr>
                            <tr>
                                <td>Vendredi</td>
                                <td>{SelectHeureMatin("Vendredi")}</td>
                                <td>{SelectHeureSoir("Vendredi")}</td>
                            </tr>
                            <tr>
                                <td>Samedi</td>
                                <td>{SelectHeureMatin("Samedi")}</td>
                                <td>{SelectHeureSoir("Samedi")}</td>
                            </tr>
                            <tr>
                                <td>Dimanche</td>
                                <td>{SelectHeureMatin("Dimanche")}</td>
                                <td>{SelectHeureSoir("Dimanche")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Horaires;
