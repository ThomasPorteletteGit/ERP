import React from 'react';
import Header from './Header';
import EtatCuves from './EtatCuves';
import Caisse from './Caisse';
import Services from "./Services";
import Horaires from './Horaires';
import Transaction from './Transaction';
import Stocks from './Stocks';
import Incidents from './Incidents';
import Releve from './Releve';
import Direction from './Direction';
import ComponentsAnimation from "./ComponentsAnimation";
import ChoixduPaiementCompAnim from './ChoixduPaiementCompAnim';
import ChoixPaiement from './ChoixPaiement';

const Dashboard = () => {

    // const fonctionnalites = ["Choix Paiement", "Montant à payer", "Panier", "A venir", "A venir", "A venir"];

    // const normalizeString = (str) => {
    //     return str
    //         .toLowerCase()
    //         .normalize("NFD")
    //         .replace(/[\u0300-\u036f]/g, "")
    //         .replace(/\s+/g, '-');
    // };


    // const buttonColors = ["#FEE4CB", "#E9E7FD", "#FFD3E2", "#DBF6FD", "#C8F7DC", "#D5DEFF"];

    return (
        <>
            <Header />
            <ComponentsAnimation />
            <ChoixduPaiementCompAnim />
            <div id='dashboard'>

                <div className="dashboard-container">

                    <div className="dashboard-left">
                        <Caisse />

                    </div>

                    <div className="dashboard-right">

                        <div className="etat-transac">
                            <EtatCuves />
                            <Transaction />
                            <ChoixPaiement />
                        </div>

                        <div className='container right-to-right'>

                            <div className="incidents-services">

                                <Incidents />
                                <Services />
                            </div>

                            <div className='stock-container'>
                                <Stocks />
                            </div>

                            <div className="horaires-releve-direction">
                                <Horaires />

                                <div className='releve-direction'>
                                    <Releve />
                                    <Direction />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </>
    );
}

export default Dashboard;
