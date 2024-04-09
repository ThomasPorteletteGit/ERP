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
import { useEffect } from 'react';

const Header = () => {

    const handleClick = (componentId) => () => {
        const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        const componentsGrand = {
            membre: <CarteMembre />,
            energie: <CarteEnergie />
        };

        divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId} />) + ReactDOMServer.renderToString(componentsGrand[componentId]);
        divGeneral.style.display = "block";
    };

    useEffect(() => {
        const homeButton = document.getElementById('homeButton');
        if (homeButton) {
            homeButton.addEventListener('click', function() {
                const status = document.cookie.split('=')[1];
                const pastDate = new Date(0);
                document.cookie = "status=" + status + "; expires=" + pastDate.toUTCString() + "; path=/";
                window.location.href = "/";
            });
        }
    }, []); 
    


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
                            <img id="homeButton" class='dashboardImages' src={homeButton} alt="bouton accueil" />
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


                    {/* pompes statut */}
                    <div className='pompes'>
                        <div className='pompes-content'>
                            <StatutPompe numeroPompe={1} carburant="SP-95" quantite={80} prix={60} />
                            <StatutPompe numeroPompe={2} carburant="SP-96" quantite={50} prix={60} />
                            <StatutPompe numeroPompe={3} carburant="SP-97" quantite={80} prix={60} />
                            <StatutPompe numeroPompe={4} carburant="Gazole" quantite={80} prix={60} />
                            {/* <StatutPompe numeroPompe={1} carburant="SP-95" quantite={80} prix={60} /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header; 
