import agrandir from '../assets/img/agrandir.png';


import React, { useState } from 'react'; 

function SelectHeureMatin() {
    const [heureMatin, setHeureMatin] = useState("6h");
    const handleChange = (e)=> {
        setHeureMatin(e.target.value);
    }

    return (
        <div>
            <span className="rond-blanc">{heureMatin}</span> 
        </div>
    );
}

function SelectHeureSoir() {
    const [heureSoir, setHeureSoir] = useState("22h");
    const handleChange = (e)=> {
        setHeureSoir(e.target.value);
    }

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
                                <td>{SelectHeureMatin()}</td>
                                <td>{SelectHeureSoir()}</td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td>{SelectHeureMatin()}</td>
                                <td>{SelectHeureSoir()}</td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td>{SelectHeureMatin()}</td>
                                <td>{SelectHeureSoir()}</td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td>{SelectHeureMatin()}</td>
                                <td>{SelectHeureSoir()}</td>
                            </tr>
                            <tr>
                                <td>Vendredi</td>
                                <td>{SelectHeureMatin()}</td>
                                <td>{SelectHeureSoir()}</td>
                            </tr>
                            <tr>
                                <td>Samedi</td>
                                <td>{SelectHeureMatin()}</td>
                                <td>{SelectHeureSoir()}</td>
                            </tr>
                            <tr>
                                <td>Dimanche</td>
                                <td>{SelectHeureMatin()}</td>
                                <td>{SelectHeureSoir()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Horaires;
