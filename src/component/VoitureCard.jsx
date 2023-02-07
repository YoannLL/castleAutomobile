import { Component, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../styles/voiture.css"

export function VoitureCard ({voiture}) {
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div className="voiture-card" data-aos="fade-right">
            <div className="voiture-img">
                <img src={voiture.photo} />
            </div>
            <div className="voiture-texte">
                <h2>{voiture.nom}</h2>
                <p>{voiture.texte}</p>
                <span>{voiture.annee}</span>
            </div>
        </div>
    )
}
export default VoitureCard;