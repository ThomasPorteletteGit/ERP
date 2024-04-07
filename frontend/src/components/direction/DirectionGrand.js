import React from "react";

const directionData = [
    { id: 1, date: '2024-03-01', description: 'Envoie du bon', prix: 10 },
    { id: 2, date: '2024-03-02', description: 'Réception du bon', prix: 40 },
    { id: 1, date: '2024-03-01', description: 'Envoie du bon', prix: 10 },
    { id: 2, date: '2024-03-02', description: 'Réception du bon', prix: 40 },
    { id: 1, date: '2024-03-01', description: 'Envoie du bon', prix: 10 },
    { id: 2, date: '2024-03-02', description: 'Réception du bon', prix: 40 },
    { id: 3, date: '2024-03-02', description: 'Réapprovisionnement en cours', prix: 49 }
];

const DirectionGrand = () => {
    return (
        <div className="composantGrand">
            <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title2">👩‍💼 Direction</h2>
                </div>
            </div>
            <div className="separator"></div>
            <h3>Détails de l'incident</h3>
            <div className="direction-details">
                <ul>
                    {directionData.map((incident, index) => (
                        <li key={index}>
                            <h3>Directrice</h3>
                            <strong>Date:</strong> {incident.date}, <strong>Description:</strong> {incident.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DirectionGrand;
