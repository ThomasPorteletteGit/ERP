import React from 'react';

const MontantAPayer = () => {
    return (
        <>
            <div className='montantAPayer'>
                <h1 className='view-title'>Montant à payer</h1>


                <div className='product'>
                    {/* à récupérer du panier client */}
                    <p className='product-name'>Produit 1</p>
                    <p className='product-name'>Produit 1</p>
                    <p className='product-name'>Produit 1</p>
                    <p>10€</p>
                </div>
            </div >
        </>
    );
}

export default MontantAPayer; 
