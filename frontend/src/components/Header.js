import React from 'react';
import logo from '../assets/img/logoBleu.png';
import homeButton from '../assets/img/accueil.png'
import backArrow from '../assets/img/en-arriere.png'
import scaleButton from '../assets/img/agrandir.png'
import tomdelacote from '../assets/img/tomdelacote.png'

const Header = () => {
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
                        </div>
                        <div className='user'>
                            <img id="tomdelacote" className='dashboardImages' src={tomdelacote} alt="utilisateur connecté" />
                            <p>Tom de la côte</p>
                        </div>
                    </div>

                    {/* cartes */}
                    <div className='cards'>
                        <div className='cartes-membres-energies'>
                            <h2>Cartes</h2>
                            <div className='membres'>
                                <h3>Membres</h3>
                            </div>

                            <div className='energies'>
                                <h3>Energies</h3>
                            </div>
                        </div>
                    </div>


                    {/* pompes statut */}
                    <div className='pompes'>

                    </div>


                    {/* img exit */}
                    <div className='exit'>

                    </div>


                </div>




            </section>
        </>
    );
}

export default Header; 
