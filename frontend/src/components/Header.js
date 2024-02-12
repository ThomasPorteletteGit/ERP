import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <div className='header'>
                <img id="logo" src={logo} alt="logo" />

                <Link to='/dashboard'>
                    <button id="backBtn">⬅️ Retour</button>
                </Link>

            </div>
        </>
    );
}

export default Header; 
