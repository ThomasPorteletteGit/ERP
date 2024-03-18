import React, { useState, useRef } from 'react';

const ConnexionPassword = () => {
    //pour stocker et mettre à jour les valeurs
    const [password, setPassword] = useState('');
 
     
    //pour effacer les données
    const handleClearButton = () => {
        setPassword('');
    };

    //pour ajouter les données
    const handleButtonClick = (value) => {
        setPassword((prevValue) => prevValue + value);
    };

    //pour rediriger vers la page suivante
    const handleEnterButton = () => {
        window.location.href = '/dashboard';
    };

    return (
        <>
        <h1 className="connection">Connexion</h1>
        <br />
        <div className="connectionView">
            {/*créer des composant pour insérer le mdp*/}
            <div className="connection-bar" id='password' >
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
        </div>
        </>
    );
};

export default ConnexionPassword;
