-- Table Employe
CREATE TABLE Employe (
    id_employe SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    type typeEmploye,
    mot_de_passe VARCHAR(255)
);

-- Table Fournisseur
CREATE TABLE Fournisseur (
    id_fournisseur SERIAL PRIMARY KEY,
    nom VARCHAR(255)
);

-- Table Reapprovisionnement
CREATE TABLE Reapprovisionnement (
    id_reappro SERIAL PRIMARY KEY,
    id_fournisseur INT,
    date_reappro DATE,
    FOREIGN KEY (id_fournisseur) REFERENCES Fournisseur(id_fournisseur)
);

-- Table ProduitEnergie
CREATE TABLE ProduitEnergie (
    id_produit_energie SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    prix DECIMAL(10, 2),
    quantite_stock INT,
    description TEXT,
    type type_produit_energie,
    id_reappro INT,
    FOREIGN KEY (id_reappro) REFERENCES Reapprovisionnement(id_reappro)
);

-- Table TransactionJournaliere
CREATE TABLE TransactionJournaliere (
    id_transaction SERIAL PRIMARY KEY,
    date_validation DATE,
    montant_total DECIMAL(10, 2)
);

-- Table Ticket
CREATE TABLE Ticket (
    id_ticket SERIAL PRIMARY KEY,
    prixTotal DECIMAL(10, 2),
    moyen_paiement VARCHAR(50),
    date DATE,
    id_transaction_journaliere INT,
    FOREIGN KEY (id_transaction_journaliere) REFERENCES TransactionJournaliere(id_transaction)
);

-- Table TicketProduit
CREATE TABLE TicketProduit (
    id_ticket INT,
    id_produit_energie INT,
    quantite_achetee INT,
    PRIMARY KEY (id_ticket, id_produit_energie),
    FOREIGN KEY (id_ticket) REFERENCES Ticket(id_ticket),
    FOREIGN KEY (id_produit_energie) REFERENCES ProduitEnergie(id_produit_energie)
);

-- Table Incident
CREATE TABLE Incident (
    id_incident SERIAL PRIMARY KEY,
    date DATE,
    description TEXT,
    niveau INT,
    est_confirme BOOLEAN
);

-- Table Pompe
CREATE TABLE Pompe (
    id_pompe SERIAL PRIMARY KEY,
    est_active BOOLEAN,
    en_cours_utilisation BOOLEAN
);

-- Table Client
CREATE TABLE Client (
    id_client SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    adresse_mail VARCHAR(255)
);

-- Table Carte
CREATE TABLE Carte (
    id_carte SERIAL PRIMARY KEY,
    Type typeCarte,
    credit DECIMAL(10, 2),
    id_client INT,
    FOREIGN KEY (id_client) REFERENCES Client(id_client)
);

-- Table LignesReapprovisionnement
CREATE TABLE LignesReapprovisionnement (
    id_reappro INT,
    id_produit_energie INT,
    qte_livree INT,
    PRIMARY KEY (id_reappro, id_produit_energie),
    FOREIGN KEY (id_reappro) REFERENCES Reapprovisionnement(id_reappro),
    FOREIGN KEY (id_produit_energie) REFERENCES ProduitEnergie(id_produit_energie)
);

-- Table Livraison
CREATE TABLE Livraison (
    id_livraison SERIAL PRIMARY KEY,
    date_livraison DATE,
    id_reappro INT,
    FOREIGN KEY (id_reappro) REFERENCES Reapprovisionnement(id_reappro)
);

CREATE TABLE Boutique (
    jour VARCHAR(255),
    horaire_ouverture TIME,
    horaire_fermeture TIME
);

CREATE TYPE typeEmploye AS ENUM ('Gerant', 'Employe');

CREATE TABLE Employe (
    id_employe SERIAL INT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    type typeEmploye,
    mot_de_passe VARCHAR(255)
);
