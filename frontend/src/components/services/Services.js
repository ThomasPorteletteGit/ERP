import React from 'react';
import agrandir from '../../assets/img/agrandir.png';
import parkingImage from '../../assets/img/image-210.png'
import covoiturage from '../../assets/img/image-220.png'
import livraison from '../../assets/img/image-230.png'
import autres from '../../assets/img/image-240.png'

const services = () => {
    return (
        <section id="services">
            <div className="services-container">
                <div className="top_container">
                    <h2>⚒️Services</h2>
                    <img src={agrandir} id="imgAgrandir" alt="agrandir" />
                </div>
                <div className="button_container">
                    <button className="button_service_parking">
                        <img src={parkingImage} id="image_parking" alt="parking"/>
                    </button>
                    <button className="button_service_voiture">
                        <img src={covoiturage} id="image_covoiturage" alt="covoiturage"/>
                    </button>
                    <button className="button_service_livraison">
                        <img src={livraison} id="image_livraison" alt="livraison"/>
                    </button>
                    <button className="button_service_autres">
                        <img src={autres} id="image_autres" alt="autres"/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default services;