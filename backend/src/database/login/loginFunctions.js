const dao = require('../../data/DAO');

function login(nom, prenom, password, callback) {
    dao.select('type_employe, mot_de_passe', 'employe', `nom='${nom}' AND prenom='${prenom}'`, (result) => {
        if(result.length === 0){
            callback({error: 'Utilisateur non trouvé', code: 404});
        }
        else if(result.rows[0].mot_de_passe !== password){
            callback({error: 'Mot de passe incorrect', code: 401});
        }
        else {
            callback({id_employe: result.rows[0].id_employe, code: 200});
        }
    });
}

function getUserStatus(nom, prenom, callback) {
    dao.select('type_employe', 'employe', `nom='${nom}' AND prenom='${prenom}'`, (result) => {
        if(result.length === 0){
            callback({error: 'Utilisateur non trouvé', code: 404});
        }
        else {
            callback({type_employe: result.rows[0].type_employe, code: 200});
        }
    });
}

module.exports = { login, getUserStatus };
