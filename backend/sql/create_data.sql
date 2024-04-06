INSERT INTO Employe(nom, prenom, type, mot_de_passe) VALUES ('Portelette', 'Thomas', 'Gerant', 5153);
INSERT INTO Employe(nom, prenom, type, mot_de_passe) VALUES ('Outili', 'Rayan', 'Employe', 8420);
INSERT INTO Employe(nom, prenom, type, mot_de_passe) VALUES ('Griffonnet', 'Matthieu', 'Employe', 6310);
INSERT INTO Employe(nom, prenom, type, mot_de_passe) VALUES ('Torri', 'Clara', 'Employe', 9710);
INSERT INTO Employe(nom, prenom, type, mot_de_passe) VALUES ('Essalah', 'Sabra', 'Employe', 3197);
INSERT INTO Employe(nom, prenom, type, mot_de_passe) VALUES ('Wallner', 'Lucas', 'Employe', 7530);
INSERT INTO Employe(nom, prenom, type, mot_de_passe) VALUES ('Delacote', 'Tom', 'Employe', 2399);
 
INSERT INTO Fournisseur(nom) VALUES ('Total');
INSERT INTO Fournisseur(nom) VALUES ('Shell');
INSERT INTO Fournisseur(nom) VALUES ('Ekwateur');
INSERT INTO Fournisseur(nom) VALUES ('Metro');
INSERT INTO Fournisseur(nom) VALUES ('Carrefour');

INSERT INTO Boutique VALUES ('Lundi', '08:00:00', '23:00:00');
INSERT INTO Boutique VALUES ('Mardi', '08:00:00', '23:00:00');
INSERT INTO Boutique VALUES ('Mercredi', '08:00:00', '23:00:00');
INSERT INTO Boutique VALUES ('Jeudi', '08:00:00', '23:00:00');
INSERT INTO Boutique VALUES ('Vendredi', '08:00:00', '23:00:00');
INSERT INTO Boutique VALUES ('Samedi', '08:00:00', '23:00:00');
INSERT INTO Boutique VALUES ('Dimanche', '08:00:00', '23:00:00');
 
INSERT INTO Pompe(est_active, en_cours_utilisation) VALUES (TRUE, FALSE);
INSERT INTO Pompe(est_active, en_cours_utilisation) VALUES (TRUE, FALSE);
INSERT INTO Pompe(est_active, en_cours_utilisation) VALUES (TRUE, FALSE);
INSERT INTO Pompe(est_active, en_cours_utilisation) VALUES (TRUE, FALSE);
 
INSERT INTO Reapprovisionnement(id_fournisseur,date_reappro) VALUES (1, '2024-03-20');
INSERT INTO Reapprovisionnement(id_fournisseur,date_reappro) VALUES (2, '2024-03-20');
INSERT INTO Reapprovisionnement(id_fournisseur,date_reappro) VALUES (3, '2024-03-20');
INSERT INTO Reapprovisionnement(id_fournisseur,date_reappro) VALUES (4, '2024-03-20');
INSERT INTO Reapprovisionnement(id_fournisseur,date_reappro) VALUES (5, '2024-03-20');
 
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('SP95', 1.5, 1000, 'Essence sans plomb 95', 'Energie', 1);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('SP98', 1.6, 1000, 'Essence sans plomb 98', 'Energie', 1);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Gazole', 1.4, 1000, 'Gazole', 'Energie', 1);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('E85', 0.8, 1000, 'Ethanol', 'Energie', 2);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('GPL', 0.6, 1000, 'Gaz de petrole liquéfié', 'Energie', 2);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Electricité', 0.2, 1000, 'Electricité', 'Energie', 3);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Coca', 1.2, 1000, 'Bouteille de Coca-Cola goût original', 'Produit', 4);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Fanta', 1.2, 1000,  'Bouteille de Fanta goût original', 'Produit', 4);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Sprite', 1.2,1000, 'Bouteille de Sprite goût original', 'Produit', 4);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Eau', 0.8, 1000, 'Bouteille d''eau', 'Produit', 5);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Chips', 1.2, 1000, 'Sachet de chips', 'Produit', 5);
INSERT INTO ProduitEnergie(nom, prix, quantite_stock, description, type, id_reappro) VALUES ('Bonbons', 1.2, 1000, 'Sachet de bonbons', 'Produit', 5);
 
INSERT INTO LignesReapprovisionnement VALUES (1, 1, 1000);
INSERT INTO LignesReapprovisionnement VALUES (1, 2, 1000);
INSERT INTO LignesReapprovisionnement VALUES (1, 3, 1000);
INSERT INTO LignesReapprovisionnement VALUES (2, 4, 1000);
INSERT INTO LignesReapprovisionnement VALUES (2, 5, 1000);
INSERT INTO LignesReapprovisionnement VALUES (3, 6, 1000);
INSERT INTO LignesReapprovisionnement VALUES (4, 7, 1000);
INSERT INTO LignesReapprovisionnement VALUES (4, 8, 1000);
INSERT INTO LignesReapprovisionnement VALUES (4, 9, 1000);
INSERT INTO LignesReapprovisionnement VALUES (5, 10, 1000);
INSERT INTO LignesReapprovisionnement VALUES (5, 11, 1000);
INSERT INTO LignesReapprovisionnement VALUES (5, 12, 1000);
 
INSERT INTO Livraison VALUES ('2024-03-20', 1);
INSERT INTO Livraison VALUES ('2024-03-20', 2);
INSERT INTO Livraison VALUES ('2024-03-20', 3);
INSERT INTO Livraison VALUES ('2024-03-20', 4);
INSERT INTO Livraison VALUES ('2024-03-20', 5);