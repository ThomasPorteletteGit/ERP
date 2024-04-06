import React from 'react';
import Header from './Header';
import EtatCuves from './cuve/EtatCuves';
import Caisse from './caisse/Caisse';
import Services from "./services/Services";
import Horaires from './horaire/Horaires';
import Transaction from './transaction/Transaction';
import Stocks from './Stocks';
import Incidents from './incidents/Incidents';
import Releve from './Releve';
import Direction from './direction/Direction';
import ComponentsAnimation from "./ComponentsAnimation";
import ChoixduPaiementCompAnim from './paiement/ChoixduPaiementCompAnim';
import ChoixPaiement from './paiement/ChoixPaiement';

const Dashboard = ({ userType }) => {
    // const cookie = document.cookie.split('=')[1];
    // // const userType = cookie === 'gerant' ? 'gerant' : 'employe';
    // const userType = 'employe';

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

                        {userType === 'gerant' && (
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
                        )}

                        {userType === 'employe' && (
                            <div className='container right-to-right'>
                                <div className="incidents-services">
                                    <Incidents />
                                </div>
                                <div className='stock-container'>
                                    <Stocks />
                                </div>
                                <div className="horaires-releve-direction">
                                    <Horaires />
                                    <div className='services-employe'>
                                        <Services />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
