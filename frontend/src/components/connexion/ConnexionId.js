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
        <h1 className="connection">Connexion</h1>
        <br />
        {/*créer des composant pour insérer l'id*/}
        <div className="connection-bar" id="id">
            <input
                id = "inputField"
                type="text"
                placeholder="Identifiant"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
        </div>

        {/* créer le clavier numérique */}
        <div className="numericButtonsConnection">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button key={number} onClick={() => handleButtonClick(number)}>
                    {number}
                </button>
            ))}
            <button onClick={() => handleClearButton()}>Effacer</button>
            <button key={0} onClick={() => handleButtonClick(0)}>
                0
            </button>
            <button onClick={() => handleEnterButton()}>Entrer</button>
            
        </div>
        </>
    );
};

export default ConnexionId;
