import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConnexionId = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');

    const handleEnterButton = (e) => {
        e.preventDefault();
        const status = getUserStatus(id);
        if (status) {
            writeStatusCookie(status);
            navigate('/dashboard');
        }
    };

    const handleInputChange = (e) => {
        setId(e.target.value);
    };

    //requete pour récupérer le status de l'utilisateur
    const getUserStatus = (id) => {
        const data = { id: id };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        fetch("/getUserStatus", options).then((response) => {
            if (response.status === 200) {
                return response.type;
            } else {
                setId('');
                return null;
            }
        });
    };

    //on écrit le cookie pour le récupérer sur le dashboard (modifier l'affichage en fonction de la valeur)
    const writeStatusCookie = (status) => {
        let date = new Date();
        date.setTime(date.getTime() + (10 * 60 * 1000 * 6 * 24)); // 1 jour
        document.cookie = "status=" + status + "; expires=" + date.toUTCString() + "; path=/";
    };

    return (
        <>
            <section id="connexionId">
                <div className="login-box">
                    <h2>Connexion</h2>
                    <form onSubmit={handleEnterButton}>
                        <div className="user-box">
                            <input type="text" name="" value={id} onChange={handleInputChange} required />
                            <label>Identifiant</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="" required />
                            <label>Mot de passe</label>
                        </div>
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ConnexionId;
