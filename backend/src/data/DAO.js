const express = require('express');

class DAO
{
    dbIp = process.env.DATABASE_URL;

    constructor() 
    {
        const { Client } = require('pg');
        this.dbConnection = new Client({
            connectionString: this.dbIp,
            ssl: {
                rejectUnauthorized: false,
            }
        });
        this.dbConnection.connect();
        console.log("Connected to the database");
    }

    /**
     * 
     * @param {*} attributes Les attributs à sélectionner sous la forme "attribut1, attribut2, ..."
     * @param {*} table La table à sélectionner
     * @param {*} condition La condition de sélection sous la forme "attribut1 = valeur1 AND attribut2 = valeur2 ..."
     * @param {*} callback La fonction à appeler une fois la requête exécutée
     */

    select(attributes, table, condition, callback)
    {
        let selectQuery = "SELECT " + attributes + " FROM " + table;
        if (condition !== '') {
            selectQuery += " WHERE " + condition;
        }
        this.dbConnection.query(selectQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    /**
     * @param {*} table La table dans laquelle insérer les valeurs
     * @param {*} values Les valeurs à insérer sous la forme "valeur1, valeur2, ..."
     * @param {*} callback La fonction à appeler une fois la requête exécutée
     */
    insert(table, values,callback)
    {
        let insertQuery = "INSERT INTO " + table + " VALUES (" + values + ")";
        this.dbConnection.query(insertQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    /** 
     * @param {*} attributes Les attributs à mettre à jour sous la forme "attribut1 = valeur1, attribut2 = valeur2, ..."
     * @param {*} table La table à mettre à jour
     * @param {*} condition La condition de mise à jour sous la forme "attribut1 = valeur1 AND attribut2 = valeur2 ..."
     * @param {*} callback La fonction à appeler une fois la requête exécutée
     * 
     */

    update(attributes, table, condition, callback)
    {
        let updateQuery = "UPDATE " + table + " SET " + attributes + " WHERE " + condition;
        this.dbConnection.query(updateQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }


    /**
     * 
     * @param {*} table La table à supprimer
     * @param {*} condition La condition de suppression sous la forme "attribut1 = valeur1 AND attribut2 = valeur2 ..."
     * @param {*} callback La fonction à appeler une fois la requête exécutée
     */

    delete(table, condition, callback)
    {
        let deleteQuery = "DELETE FROM " + table + " WHERE " + condition;
        this.dbConnection.query(deleteQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }

    /**
     * Ferme la connexion à la base de données
     */
    
    close()
    {
        this.dbConnection.end();
    }

}
const dao = new DAO();
module.exports = dao;
