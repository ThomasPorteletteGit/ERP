import React from 'react';
import agrandir from '../../assets/img/agrandir.png';

const services = () => {
    return (
        <section id="services">
            <div className="services-container">
                <div className="top_container">
                    <h2>⚒️Services</h2>
                    <img src={agrandir} id="imgAgrandir" alt="agrandir" />
                </div>
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