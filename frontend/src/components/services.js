import React from 'react';
import service_img from '../assets/img/service-client.png';

const services = () => {
    return (
            <section id="services">
                <div className="services-container">
                    <div className="top_container">
                        <img src={service_img} id="icon_container" alt="img service"/>
                        <h2>Services</h2>
                    </div>
                    <hr/>
                    <div className="button_container">
                        <button className="button_service_parking">Parking</button>
                        <button className="button_service_voiture">Co-voiturage</button>
                        <button className="button_service_livraison">Livraison</button>
                        <button className="button_service_autres">Autres</button>
                    </div>
                </div>
            </section>
    );
}

export default services;