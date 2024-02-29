const express = require('express');
const postgres = require('pg');

class DAO
{
    dbIp = "localhost"; // TODO : mettre IP heroku
    dbPort = "27017"; // TODO : pareil mais pb vu que c'est un port dynamique
    dbName = "s401_ERP";
    dbUser = "matthieu griffonnet"; // Je crois ?
    dbPassword = "mdp"; // non

    constructor() 
    {
        this.dbConnection = mysql.createConnection({
            host: this.dbIp,
            user: this.dbUser,
            password: this.dbPassword
        });

        this.dbConnection.connect((err) => {
            if (err) throw err;
            console.log("Connected to MySQL");
        });
    }

    /**
     * @param {*} selectQuery La requête SQL à exécuter sous la forme "SELECT * FROM table WHERE ..."
     * @param {*} callback  La fonction à appeler une fois la requête exécutée
     */

    select(selectQuery, callback)
    {
        this.dbConnection.query(selectQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    /**
     * @param {*} insertQuery La requête SQL à exécuter sous la forme "INSERT INTO table VALUES ..."
     * @param {*} callback  La fonction à appeler une fois la requête exécutée
     */

    insert(insertQuery, callback)
    {
        this.dbConnection.query(insertQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    /**
     * @param {*} updateQuery  La requête SQL à exécuter sous la forme "UPDATE table SET ... WHERE ..."
     * @param {*} callback  La fonction à appeler une fois la requête exécutée
     */

    update(updateQuery, callback)
    {
        this.dbConnection.query(updateQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    /**
     * @param {*} deleteQuery La requête SQL à exécuter sous la forme "DELETE FROM table WHERE ..."
     * @param {*} callback  La fonction à appeler une fois la requête exécutée
     */

    delete(deleteQuery, callback)
    {
        this.dbConnection.query(deleteQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    close()
    {
        this.dbConnection.end();
    }

}
module.exports = DAO;
