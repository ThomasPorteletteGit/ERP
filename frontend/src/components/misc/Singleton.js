class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.prixTotal = 0;
            this.prixAffiche = 0;
            this.produits = [];
            Singleton.instance = this;
        }
        return Singleton.instance;
        
    }

    getPrixTotal() {
        return this.prixTotal;
    }

    setPrixTotal(prixTotal) {
        this.prixTotal = prixTotal;
    }

    getPrixAffiche() {
        return this.prixAffiche;
    }

    setPrixAffiche(prixAffiche) {
        this.prixAffiche = prixAffiche;
    }
    

    getProduits() {
        return this.produits;
    }

    setProduits(produits) {
        this.produits = produits;
    }

    addProduit(produit) {
        console.log(produit);
        this.produits.push(produit);
    }

    removeProduit(produit) {
        this.produits = this.produits.filter(p => p !== produit);
    }
}

const instance = new Singleton();
export default instance;