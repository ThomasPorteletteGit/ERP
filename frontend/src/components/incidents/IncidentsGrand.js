import React, { useState } from "react";


const IncidentsGrand = ({incidents}) => {
    const incidentsDataAConfirmer = incidents.filter(incident => incident.est_confirme === false);
    const incidentsData = incidents.filter(incident => incident.est_confirme === true);

    const validerIncident = async () => {
        const niveau = document.querySelector('select[name="niveau"]').value;
        const description = document.querySelector('textarea[name="description"]').value;
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const annee_mois_jour = year + '-' + month + '-' + day;
        const incident = {date: annee_mois_jour, niveau: niveau, description: description, est_confirme: false};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(incident)
        };
        await fetch("/incidents/add", options);
    }

    const confirmIncident = async (button) => {
        const incidentId = button.parentElement.id.split('incident')[0];
        console.log(incidentId);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({incidentId: incidentId})
        };
        await fetch("/incidents/confirm", options);
    }

    const deleteIncident = async (button) => {
        const incidentId = button.parentElement.id.split('incident')[0];
        console.log(incidentId);
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({incidentId: incidentId})
        };
        await fetch("/incidents/delete", options);
    }

    document.addEventListener('submit', function (e) {
        if(e.target.classList.contains('preventdefault-form')) {
            e.preventDefault();
            validerIncident();
        }
    });



    document.addEventListener('click', function (e) {
        if(e.target.classList.contains('confirm-button')) {
            confirmIncident(e.target);
        }
        else if(e.target.classList.contains('delete-button')) {
            deleteIncident(e.target);
        }
    });
    return (
        <div className='container-composantGrandIncident'>
            <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title2">⚠️ Incidents</h2>
                </div>
            </div>
            <div className="separator"></div>
            <div className="composantGrandIncident">
                <div className="left-container-incident">
                    <div>
                        <h3>Détails des incidents</h3>
                        <ul>
                            {incidentsData.map((incident, index) => (
                                <li id={incident.id_incident+"incident"}>
                                    <strong>Niveau:</strong> {incident.niveau}, <strong>Description:</strong> {incident.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Incidents à confirmer</h3>
                        <ul>
                            {incidentsDataAConfirmer.map((incident, index) => (
                                <li id={incident.id_incident+"incident"}>
                                    <strong>Niveau:</strong> {incident.niveau}, <strong>Description:</strong> {incident.description}
                                    <p></p>
                                    <button className="confirm-button">Confirmer</button>
                                    <button className="delete-button">Supprimer</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right-container">
                    <div>
                        <h3>Ajouter un nouvel incident</h3>
                        <form className="preventdefault-form">
                            <div>
                                <label>Niveau d'alerte:</label>
                                <select name="niveau" required>
                                    <option value={1}>Faible</option>
                                    <option value={2}>Moyen</option>
                                    <option value={3}>Élevé</option>
                                </select>
                            </div>
                            <div>
                                <label className="texte-description">Description:</label>
                                <textarea name="description"  placeholder="Rentrer la description de l'incident" required></textarea>
                            </div>
                            <button className="button_style" type="submit">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncidentsGrand;