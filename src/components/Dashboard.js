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

    const buttonColors = ["#FEE4CB", "#E9E7FD", "#FFD3E2", "#DBF6FD", "#C8F7DC", "#D5DEFF"];

    return (
        <>
            <Header />
            <div id='dashboard'>
                <h1 className='view-title'>Dashboard 📊</h1>
                <div className="dashboard-container">
                    {fonctionnalites.map((fonctionnalite, index) => (
                        <Link key={index} to={`/${normalizeString(fonctionnalite)}`} className="dashboard-link">
                            {/* % pour ne pas dépasser la taille du tableau et répéter les couleurs */}
                            <button className="dashboard-button" style={{ backgroundColor: buttonColors[index % buttonColors.length] }}>{fonctionnalite}</button>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
