import clock from '../assets/img/clock.png';

const Horaires = () => {
    return (
        <section id="horaires">
            <div className="horaires-container">
                <div className="top_container">
                    <img src={clock} alt="horaires" id="icon_container_clock" />
                    <div>
                        <h2>Horaires</h2>
                        <div className='horaire-header'>
                            <h6>Ce sont les horaires d’ouverture et fermeture de votre boutique</h6>
                        </div>
                    </div>
                </div>

                <hr />
                <div className='horaires-content'>
                    <table>
                        <thead>
                            <tr className='of'>
                                <th>Jour</th>
                                <th>Ouverture</th>
                                <th>Fermeture</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lundi</td>
                                <td>
                                    {selectHeure()}
                                </td>
                                <td>
                                    {selectHeure()}
                                </td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td>{selectHeure()}</td>
                                <td>{selectHeure()}</td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td>{selectHeure()}</td>
                                <td>{selectHeure()}</td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td>{selectHeure()}</td>
                                <td>{selectHeure()}</td>
                            </tr>
                            <tr>
                                <td>Vendredi</td>
                                <td>{selectHeure()}</td>
                                <td>{selectHeure()}</td>
                            </tr>
                            <tr>
                                <td>Samedi</td>
                                <td>{selectHeure()}</td>
                                <td>{selectHeure()}</td>
                            </tr>
                            <tr>
                                <td>Dimanche</td>
                                <td>{selectHeure()}</td>
                                <td>{selectHeure()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

function selectHeure() {
    return (
        <select className='heures'>
            {[...Array(24).keys()].map(i =>
                [0, 30].map(j => {
                    let heureFormat = (i < 10 ? '0' + i : i) + ':' + (j < 10 ? '0' + j : j);
                    return <option value={heureFormat} key={heureFormat}>{heureFormat}</option>
                })
            )}
        </select>
    );
}
export default Horaires;
