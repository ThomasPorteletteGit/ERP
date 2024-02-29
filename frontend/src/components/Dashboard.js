import React from 'react';
import Header from './Header';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import ipServer from './config';
import EtatCuves from './EtatCuves';
import Caisse from './Caisse';
import Services from "./services";
import Transaction from './Transaction';

const Dashboard = () => {
    // const fonctionnalites = ["Choix Paiement", "Montant à payer", "Panier", "A venir", "A venir", "A venir"];

    // const [backendData, setBackendData] = useState([{}]);
    // const normalizeString = (str) => {
    //     return str
    //         .toLowerCase()
    //         .normalize("NFD")
    //         .replace(/[\u0300-\u036f]/g, "")
    //         .replace(/\s+/g, '-');
    // };

    // useEffect(() => {
    //     fetch(ipServer + "/api").then(response => response.json()).then(data => setBackendData(data.message));
    // }, []);

    // const buttonColors = ["#FEE4CB", "#E9E7FD", "#FFD3E2", "#DBF6FD", "#C8F7DC", "#D5DEFF"];

    return (
        <>
            <Header />
            <div id='dashboard'>
                {/* <h1 className='view-title'>Dashboard 📊</h1>
                <div className="dashboard-container">
                    {fonctionnalites.map((fonctionnalite, index) => (
                        <Link key={index} to={`/${normalizeString(fonctionnalite)}`} className="dashboard-link"> */}
                {/* % pour ne pas dépasser la taille du tableau et répéter les couleurs */}
                {/* <button className="dashboard-button" style={{ backgroundColor: buttonColors[index % buttonColors.length] }}>{fonctionnalite}</button>
                        </Link>
                    ))}
                </div> */}

                <div className="dashboard-container">

                    <div className="dashboard-left">
                        <Caisse />

                    </div>

                    <div className="dashboard-right">

                        <div className="etat-transac">
                            <EtatCuves />
                            <Transaction />
                        </div>

                        <Services />
                    </div>

                </div>


            </div>

        </>
    );
}

export default Dashboard;
