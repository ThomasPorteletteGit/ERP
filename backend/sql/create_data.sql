INSERT INTO Employe VALUES ("Portelette", "Thomas", "Gerant", 5153);
INSERT INTO Employe VALUES ("Outili", "Rayan", "Employe", 8420);
INSERT INTO Employe VALUES ("Griffonnet", "Matthieu", "Employe", 6310);
 
INSERT INTO Fournisseur VALUES ("Total");
INSERT INTO Fournisseur VALUES ("Shell");
INSERT INTO Fournisseur VALUES ("Ekwateur");
INSERT INTO Fournisseur VALUES ("Metro");
INSERT INTO Fournisseur VALUES ("Carrefour");
 
INSERT INTO Boutique VALUES ("08:00:00", "23:00:00");
 
INSERT INTO Pompe VALUES (TRUE, FALSE);
INSERT INTO Pompe VALUES (TRUE, FALSE);
INSERT INTO Pompe VALUES (TRUE, FALSE);
INSERT INTO Pompe VALUES (TRUE, FALSE);
 
INSERT INTO Reapprovisionnement VALUES (1, "2024-03-20");
INSERT INTO Reapprovisionnement VALUES (2, "2024-03-20");
INSERT INTO Reapprovisionnement VALUES (3, "2024-03-20");
INSERT INTO Reapprovisionnement VALUES (4, "2024-03-20");
INSERT INTO Reapprovisionnement VALUES (5, "2024-03-20");
 
INSERT INTO ProduitEnergie VALUES ("SP95", 1.5, "Essence sans plomb 95", "Energie", 1);
INSERT INTO ProduitEnergie VALUES ("SP98", 1.6, "Essence sans plomb 98", "Energie", 1);
INSERT INTO ProduitEnergie VALUES ("Gazole", 1.4, "Gazole", "Energie", 1);
INSERT INTO ProduitEnergie VALUES ("E85", 0.8, "Ethanol", "Energie", 2);
INSERT INTO ProduitEnergie VALUES ("GPL", 0.6, "Gaz de petrole liquéfié", "Energie", 2);
INSERT INTO ProduitEnergie VALUES ("Electricité", 0.2, "Electricité", "Energie", 3);
INSERT INTO ProduitEnergie VALUES ("Coca", 1.2, "Bouteille de Coca-Cola goût original", "Produit", 4);
INSERT INTO ProduitEnergie VALUES ("Fanta", 1.2, "Bouteille de Fanta goût original", "Produit", 4);
INSERT INTO ProduitEnergie VALUES ("Sprite", 1.2, "Bouteille de Sprite goût original", "Produit", 4);
INSERT INTO ProduitEnergie VALUES ("Eau", 0.8, "Bouteille d'eau", "Produit", 5);
INSERT INTO ProduitEnergie VALUES ("Chips", 1.2, "Sachet de chips", "Produit", 5);
INSERT INTO ProduitEnergie VALUES ("Bonbons", 1.2, "Sachet de bonbons", "Produit", 5);
 
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
 
INSERT INTO Livraison VALUES ("2024-03-20", 1);
INSERT INTO Livraison VALUES ("2024-03-20", 2);
INSERT INTO Livraison VALUES ("2024-03-20", 3);
INSERT INTO Livraison VALUES ("2024-03-20", 4);
INSERT INTO Livraison VALUES ("2024-03-20", 5);