import React, { useState } from "react";

const IncidentsGrand = () => {
    const [incidents, setIncidents] = useState([]);
    const [newIncident, setNewIncident] = useState({
        niveau: 1,
        description: ""
    });

    const [showTitle, setShowTitle] = useState(true);
    const [showDivider, setShowDivider] = useState(true);

    const toggleTitle = () => {
        setShowTitle(!showTitle);
    };

    const toggleDivider = () => {
        setShowDivider(!showDivider);
    };

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

    return (
        <div className="composantGrand">
            {/* Section pour afficher la liste des incidents */}
            <div className="left-container">
            {showTitle && (
                <div className="Top_Component_Grand">
                    <h2 className="component_title">⚠️ Incidents</h2>
                </div>
            )}
            {showDivider && <hr />}
                <ul>
                    {incidents.map((incident, index) => (
                        <li key={index}>
                            <strong>Niveau:</strong> {incident.niveau}, <strong>Description:</strong> {incident.description}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Section pour ajouter un nouvel incident */}
            <div className="right-container">
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
                        <label>Description:</label>
                        <textarea name="description" value={newIncident.description} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default IncidentsGrand;
