import React from 'react';
import logo from '../assets/img/logoBleu.png';
import homeButton from '../assets/img/accueil.png'
import backArrow from '../assets/img/en-arriere.png'
import scaleButton from '../assets/img/agrandir.png'
import profilePic from '../assets/img/profilePic.png'

const Header = () => {
    return (
        <>
            <div className='header'>
                <img id="logo" className='dashboardImages' src={logo} alt="logo" /> 
                <img id="homeButton" className='dashboardImages' src={homeButton} alt="bouton accueil" />
                <img id="backArrow" className='dashboardImages' src={backArrow} alt="fleche retour" />
                <img id="scaleButton" className='dashboardImages' src={scaleButton} alt="bouton agrandir" />
                <div className='dashboardImages' id="profilePicBackground">
                    <img id="profilePic" src={scaleButton} alt="photo de profil" />
                </div>
            </div>
        </>
    );
}

export default Header; 
