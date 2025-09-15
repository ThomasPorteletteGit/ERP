import React from "react";

const directionData = [
    { id: 1, date: '2024-04-09', description: 'Mettre à jour l\'heure de fermeture de la boutique le lundi à 19h30', prix: 10 },
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
                <ul className="ul-direction">
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
