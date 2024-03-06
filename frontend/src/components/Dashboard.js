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

const Dashboard = () => {

    return (
        <>
            <Header />
            <div id='dashboard'>

                <div className="dashboard-container">

                    <div className="dashboard-left">
                        <Caisse />

                    </div>

                    <div className="dashboard-right">

                        <div className="etat-transac">
                            <EtatCuves />
                            <Transaction />
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
