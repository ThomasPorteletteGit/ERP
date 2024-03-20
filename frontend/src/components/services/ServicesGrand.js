import React from "react";
import services from "./Services";

const ServicesGrand = () => {
    return (
        
        <div className="composantGrand">
            <div className="Top_Component_Grand">
                <h2 className="component_title"> ⚒️ Services</h2>
            </div>

            <hr/>
            <div className="button_container_grand_services">

                    <button className="serviceParkingButton">
                        <h3> Parking</h3>
                        
                    </button>

                    <button className="serviceCoVoiturageButton">
                        <h3> Co-voiturage</h3>
                       
                    </button>

                    <button className="serviceLivraisonButton">
                        <h3> Livraison</h3>
                         
                    </button>
  
                    <button className="serviceAutreButton">
                        <h3> Autres </h3>
                       
                    </button>
                </div>
          
                </div>
         
         
    );
};

export default ServicesGrand;
