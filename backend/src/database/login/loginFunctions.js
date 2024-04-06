const dao = require('../../data/DAO');
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

function getUserStatus(id){
    dao.select('type', 'id_employe='+id, (result) => {
        return result[0].type;
    }
    );
}

module.exports = { login, getUserStatus};
