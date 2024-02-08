import React from 'react';
import logo from '../assets/img/logo.png';

const Header = () => {
    return (
        <>

            <div className='header'>
                <img id="logo" src={logo} alt="logo" />
                <button id="backBtn">⬅️ Retour</button>
            </div>
        </>
    );
}

export default Header; 
