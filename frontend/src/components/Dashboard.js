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

let energies, horaires, incidents;
await fetch('/stockEnergie/get')
    .then(response => response.json())
    .then(data => {
        energies = data;
    });

await fetch('/horaires/get')
    .then(response => response.json())
    .then(data => {
        horaires = data;
    });

await fetch('/incidents/get')
    .then(response => response.json())
    .then(data => {
        incidents = data;
    });

const Dashboard = ({ userType }) => {

    return (
        <>
            <Header />
            <ComponentsAnimation/>
            <ChoixduPaiementCompAnim />
            <div id='dashboard'>
                <div className="dashboard-container">
                    <div className="dashboard-left">
                        <Caisse />
                    </div>
                    <div className="dashboard-right">
                        <div className="etat-transac">
                            <EtatCuves energies={energies}/>
                            <Transaction />
                            <ChoixPaiement />
                        </div>

                        {userType === 'gerant' && (
                            <div className='container right-to-right'>
                                <div className="incidents-services">
                                    <Incidents incidents={incidents} />
                                    <Services />
                                </div>
                                <div className='stock-container'>
                                    <Stocks />
                                </div>
                                <div className="horaires-releve-direction">
                                    <Horaires horaires={horaires} />
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
                                    <Incidents incidents={incidents}/>
                                </div>
                                <div className='stock-container'>
                                    <Stocks />
                                </div>
                                <div className="horaires-releve-direction">
                                    <Horaires horaires={horaires}/>
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
