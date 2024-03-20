const DAO = require('../../data/DAO');
const dao = new DAO();
/**
 * 
 * @param {*} username Nom d'utilisateur sous la forme NomPrénom
 * @param {*} password Mot de passe
 * @param {*} callback Fonction de rappel qui renvoie le résultat de la requête qui va permettre de créer un cookie de session si le login est réussi
 */
function login(username, password, callback) {
    dao.select('type', 'employe', 'nom='+username, (result) => {
        if (result.length === 0) { 
            callback({error: 'Utilisateur non trouvé', code: 404});
        }
        else {
            dao.select('mot_de_passe', 'employe', 'nom='+username, (result) => {
                if (result[0].mot_de_passe === password) {
                    callback({type: 'employe', code: 200});
                }
                else {
                    callback({error: 'Mot de passe incorrect', code: 401});
                }
            });
        }
    });
}

module.exports = { login };
