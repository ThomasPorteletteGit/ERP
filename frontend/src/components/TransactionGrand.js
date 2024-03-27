import React, { useState } from "react";

// incident à récup dans la bd
const incidentsData = [
    { id_transaction: 1, date: '2024-03-01', quantité: 'Problème de pompe', prix: 20, statut: "En cours..."},
    { id_transaction: 2, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé"},
    { id_transaction: 3, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé"},
];

const TransactionGrand = () => {
    const [incidents, setIncidents] = useState(incidentsData);
    const [newIncident, setNewIncident] = useState({
        niveau: 1,
        quantité: ""
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
            quantité: ""
        });
    };

    return (
        <div className='container-composantGrandIncident'>
            <h2 className="component_title">💸 Transaction</h2>
            <div className="separator"></div>
        <div className="composantGrandIncident">
                    
            {/* Section gauche pour afficher la liste des incidents */}
            <div className="left-container">
                <h3>Information des transactions</h3>
                <ul className="ul-transaction">
                    {incidents.map((incident, index) => (
                    <li key={index}>
                        <strong>Transaction n°</strong> {incident.id_transaction},<br />
                        <div className="separatorBlack"></div>
                        <strong>Quantité:</strong> {incident.quantité},<br />
                        <strong>Total à payer:</strong> {incident.prix} <span className="currency">euros</span>,<br />
                        <strong>Paiement:</strong> {incident.statut} 
                    </li>                                  
                    ))}
                </ul>
            </div>
            {/* Section droite pour ajouter un nouvel incident et afficher les détails */}
            <div className="separatorColumn"></div>
        </div>
        </div>
    );      
};

export default TransactionGrand;
