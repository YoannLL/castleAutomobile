import { Component } from "react";

import "../styles/voiture.css"

export function VoitureCard ({voiture}) {
    console.log(voiture);
    return(
        <div className="voiture-card">
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