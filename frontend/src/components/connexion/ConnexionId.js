import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConnexionId = ({userType}) => {
    const clearURL = () => {
        if (window.location.href.includes("/dashboard")) {
            window.history.pushState({}, document.title, "/");
        }
    }
    
    const navigate = useNavigate();
    if(userType === 'gerant' || userType === 'employe') {
        navigate('/dashboard');
        clearURL();
    }    
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleEnterButton = async (e) => {
        e.preventDefault();
        const status = await getUserStatus(id);
        if (status) {
            let checkLogin;
            const nom = id.split(" ")[0];
            const prenom = id.split(" ")[1];
            const data = { nom: nom, prenom: prenom, password: password };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }

            await fetch("/login", options)
                .then(response => response.json())
                .then(data => {
                    if(data.code === 200) {
                        checkLogin = true;
                    }
                    else {
                        checkLogin = false;
                    }
                });

            if (checkLogin) {
                writeStatusCookie(status);
                navigate('/dashboard');
                clearURL();
            }
            else {
                alert("Identifiant ou mot de passe incorrect"); // TODO : changer l'affichage
            }

            
        }
    };

 

    const handleInputChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    //requete pour récupérer le status de l'utilisateur
    const getUserStatus = async (id) => {
        let toReturn;
        let nom = id.split(" ")[0];
        let prenom = id.split(" ")[1];
        const data = { nom: nom, prenom: prenom };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        await fetch("/login/getUserStatus", options)
            .then(response => response.json())
            .then(data => {
                toReturn = data.type_employe;
            });
        return toReturn;
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
                            <label>Nom et prénom</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="" value={password}  onChange={handlePasswordChange} required/>
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
