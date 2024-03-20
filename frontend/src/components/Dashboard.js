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
import ChoixPaiement from './ChoixPaiement';

const Dashboard = () => {
    const cookie = document.cookie.split('=')[1];
    const userType = cookie === 'gerant' ? 'gerant' : 'employe';

    return (
        <>
            <Header />
            <ComponentsAnimation />
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
