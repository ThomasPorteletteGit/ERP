import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const fonctionnalites = ["Choix Paiement", "Montant à payer", "Panier", "A venir", "A venir", "A venir"];

    const normalizeString = (str) => {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-');
    };

    return (
        <>
            <Header />
            <div id='dashboard'>
                <h1 className='view-title'>Dashboard 📊</h1>
                <div className="dashboard-container">
                    {fonctionnalites.map((fonctionnalite, index) => (
                        <Link key={index} to={`/${normalizeString(fonctionnalite)}`} className="dashboard-link">
                            <button className="dashboard-button">{fonctionnalite}</button>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
