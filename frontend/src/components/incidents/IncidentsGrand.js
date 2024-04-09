import React, { useState } from "react";

// incident à récup dans la bd
const incidentsData = [
    { id_incident: 1, date: '2024-03-01', description: 'Problème de pompe', niveau: 2 },
    { id_incident: 2, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
    { id_incident: 3, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
];

const incidentsDataAConfirmer = [
    { id_incident: 1, date: '2024-03-01', description: 'Problème de pompe', niveau: 2 },
    { id_incident: 2, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
    { id_incident: 3, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
];

const IncidentsGrand = () => {
    const [incidents, setIncidents] = useState(incidentsData);
    const [incidentsAConfirmer, setIncidentsAConfirmer] = useState(incidentsDataAConfirmer);
    const [newIncident, setNewIncident] = useState({
        niveau: 1,
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewIncident(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIncidents(prevIncidents => [...prevIncidents, newIncident]);
        setNewIncident({
            niveau: 1,
            description: ""
        });
    };

    const handleConfirm = (incident) => {
        setIncidents([...incidents, incident]);
        setIncidentsAConfirmer(prevIncidents => prevIncidents.filter(item => item !== incident));
    };

    const handleDelete = (incident) => {
        setIncidentsAConfirmer(prevIncidents => prevIncidents.filter(item => item !== incident));
    };

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
                        <h3>Détails de l'incident</h3>
                        <ul>
                            {incidents.map((incident, index) => (
                                <li key={index}>
                                    <strong>Niveau:</strong> {incident.niveau}, <strong>Description:</strong> {incident.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Incidents à confirmer</h3>
                        <ul>
                            {incidentsAConfirmer.map((incident, index) => (
                                <li key={index}>
                                    <strong>Niveau:</strong> {incident.niveau}, <strong>Description:</strong> {incident.description}
                                    <p></p>
                                    <button className="confirm-button" onClick={() => handleConfirm(incident)}>Confirmer</button>
                                    <button className="delete-button" onClick={() => handleDelete(incident)}>Supprimer</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right-container">
                    <div>
                        <h3>Ajouter un nouvel incident</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Niveau d'alerte:</label>
                                <select name="niveau" value={newIncident.niveau} onChange={handleChange}>
                                    <option value={1}>Faible</option>
                                    <option value={2}>Moyen</option>
                                    <option value={3}>Élevé</option>
                                </select>
                            </div>
                            <div>
                                <label className="texte-description">Description:</label>
                                <textarea name="description" value={newIncident.description} onChange={handleChange}></textarea>
                            </div>
                            <button className="button_style" id="enregistrerI" type="submit">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncidentsGrand;