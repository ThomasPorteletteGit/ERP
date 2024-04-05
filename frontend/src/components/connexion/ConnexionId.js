import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ConnexionId = () => {
    const navigate = useNavigate();
    //pour stocker et mettre à jour les valeurs
    const [id, setId] = useState('');
    const input = useRef(null);

    //pour effacer les données
    const handleClearButton = () => {
        setId('');
    };

    //pour ajouter les données
    const handleButtonClick = (value) => {
        setId((prevValue) => prevValue + value);
    };

    //pour rediriger vers la page suivante
    const handleEnterButton = () => {
        navigate('/connexionPassword');
        writeIdCookie();
    };

    //pour supprimer un seul élément
    const handleClear2Button = () => {
        setId((prevValue) => prevValue.slice(0, -1));
    };

    function writeIdCookie() {
        let date = new Date();
        date.setTime(date.getTime() + (10 * 60 * 1000));
        document.cookie = "id=" + id + "; expires=" + date.toUTCString() + "; path=/";
    }

    return (
        <>
            <div className="login-box">
                <h2>Connexion</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                            <label>Identifiant</label>
                        </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                            <label>Mot de passe</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Se connecter
                    </a>
                </form>
            </div>
        </>
    );
};

export default ConnexionId;
