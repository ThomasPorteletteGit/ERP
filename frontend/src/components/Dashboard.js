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
import instance from './misc/Singleton';

let energies, horaires, incidents, transactions, produits
let prixTotal = 0;
await fetch('/stockEnergie/get')
    .then(response => response.json())
    .then(data => {
        energies = data;
    });

await fetch('/stockProduits/get')
    .then(response => response.json())
    .then(data => {
        produits = data;
    }
);

const stocks = produits.concat(energies);

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

await fetch('/transaction/get')
    .then(response => response.json())
    .then(data => {
        transactions = data;
    });


const Dashboard = ({ userType }) => {

    return (
        <>
            <Header />
            <ComponentsAnimation/>
            <div id='dashboard'>
                <div className="dashboard-container">
                    <div className="dashboard-left">
                        <Caisse energies={energies} singleton={instance}/>
                    </div>
                    <div className="dashboard-right">
                        <div className="etat-transac">
                            <EtatCuves energies={energies}/>
                            <Transaction transactions={transactions}/>
                            <ChoixPaiement singleton={instance}/>
                        </div>

                        {userType === 'gerant' && (
                            <div className='container right-to-right'>
                                <div className="incidents-services">
                                    <Incidents incidents={incidents} />
                                    <Services />
                                </div>
                                <div className='stock-container'>
                                    <Stocks stocks={stocks}/>
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
                                    <Stocks stocks={stocks}/>
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
