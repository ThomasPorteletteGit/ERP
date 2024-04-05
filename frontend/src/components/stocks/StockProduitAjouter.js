import React, { useState } from 'react';

const StockProduitAjouter = () => {
    const [productDetails, setProductDetails] = useState({
        image: '',
        name: '',
        description: '',
        quantity: '',
        price: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductDetails({ ...productDetails, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(productDetails);
        setProductDetails({
            image: '',
            name: '',
            description: '',
            quantity: '',
            price: ''
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'image/png') {
            // Process the file (you might want to upload it to a server or display it)
            setProductDetails({ ...productDetails, image: URL.createObjectURL(file) });
        } else {
            // Provide feedback to the user about selecting a PNG file
            console.log("Veuillez sélectionner un fichier PNG.");
        }
    };
    

    return (
        <div className="StockProduitAjouter">
            <h2>Ajouter un nouveau produit</h2>
            <button className="annulerProduitButton">Retour</button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="imageProduit">Image :</label>
                    <div className="custom-file-upload">
                        <input
                            type="file"
                            id="imageProduit"
                            accept=".png" 
                            name="imageProduit"
                            onChange={handleImageChange} 
                        />
                        <label htmlFor="imageProduit">Choisir un fichier</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="nameProduit">Nom :</label>
                    <input
                        type="text"
                        id="nameProduit"
                        name="nameProduit"
                        value={productDetails.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="descriptionProduit">Description :</label>
                    <textarea
                        id="descriptionProduit"
                        name="descriptionProduit"
                        value={productDetails.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="quantityProduit">Quantité :</label>
                    <input
                        type="number"
                        id="quantityProduit"
                        name="quantityProduit"
                        value={productDetails.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="priceProduit">Prix :</label>
                    <input
                        type="number"
                        id="priceProduit"
                        name="priceProduit"
                        value={productDetails.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="submit-container">
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );    
};

export default StockProduitAjouter;
