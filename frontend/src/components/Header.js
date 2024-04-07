import React from 'react';
import SmallIcons from "./SmallIcons";
import logo from '../assets/img/logoBleu.png';
import homeButton from '../assets/img/accueil.png'
import backArrow from '../assets/img/en-arriere.png'
import scaleButton from '../assets/img/agrandir.png'
import tomdelacote from '../assets/img/tomdelacote.png'
import exit from '../assets/img/exit.png'
import ReactDOMServer from 'react-dom/server';
import CarteMembre from './carteMembre/CarteMembre';
import CarteEnergie from './carteEnergie/CarteEnergie';
import StatutPompe from './pompe/StatutPompe';

let pompesStates = new Array();
let liste_cartes_membres = new Array();
let liste_cartes_energies = new Array();

await fetch('/pompes/get')
    .then(response => response.json())
    .then(data => {
        pompesStates = data;
    });
    
await fetch('/cartesMembre/get')
    .then(response => response.json())
    .then(data => {
        liste_cartes_membres = data;
    });

await fetch('/cartesEnergie/get')
    .then(response => response.json())
    .then(data => {
        liste_cartes_energies = data;
    });

const Header = () => {

    const handleClick = (componentId) => () => {
        const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        const componentsGrand = {
            membre: <CarteMembre liste_cartes_membres={liste_cartes_membres} />,
            energie: <CarteEnergie liste_cartes_energies={liste_cartes_energies} />
        };

        divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId} />) + ReactDOMServer.renderToString(componentsGrand[componentId]);
        divGeneral.style.display = "block";
    };

    return (
        <>
            <section id="header">

                {/* container header */}
                <div className='container'>

                    {/* logo */}
                    <div className='logo'>
                        <img id="logo" className='dashboardImages' src={logo} alt="logo" />
                    </div>

                    {/* nav et tom de la cote */}
                    <div className='buttons-user'>
                        <div className='buttons'>
                            <img id="homeButton" className='dashboardImages' src={homeButton} alt="bouton accueil" />
                            <img id="backArrow" className='dashboardImages' src={backArrow} alt="fleche retour" />
                            <img id="scaleButton" className='dashboardImages' src={scaleButton} alt="bouton agrandir" />
                            <img id="exit" className='dashboardImages' src={exit} alt="bouton exit" />

                        </div>
                        <div className='user'>
                            <img id="tomdelacote" className='dashboardImages' src={tomdelacote} alt="utilisateur connecté" />
                            <div className="Divflex">
                                <p id="user_name">TOM DE LA COTE</p>
                                <p id="user_mail">tomDeLaCote@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* cartes */}
                    <div className='cards'>
                        <div className='cartes-membres-energies'>
                            <h2>Cartes</h2>
                            <div className='cartes-content'>
                                <button id="membre" className='carte' onClick={handleClick('membre')}>Membre</button>
                                <button id="energie" className='carte' onClick={handleClick('energie')}>Energie</button>
                            </div>
                        </div>
                    </div>


                    <div className='pompes'>
                        <div className='pompes-content'>
                            <StatutPompe numeroPompe={1} carburant="SP-95" quantite={80} prix={60} statut={pompesStates[0].est_active} />
                            <StatutPompe numeroPompe={2} carburant="SP-96" quantite={50} prix={60} statut={pompesStates[1].est_active} />
                            <StatutPompe numeroPompe={3} carburant="SP-97" quantite={80} prix={60} statut={pompesStates[2].est_active} />
                            <StatutPompe numeroPompe={4} carburant="Gazole" quantite={80} prix={60} statut={pompesStates[3].est_active} />
                            {/* <StatutPompe numeroPompe={1} carburant="SP-95" quantite={80} prix={60} /> */}
                        </div>
                    </div>




                </div>
            </section>
        </>
    );
}

export default Header; 
