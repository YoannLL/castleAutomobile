import { Component } from "react";
import "../styles/voiture.css"

import voitures from "../voitures/data.json"

import VoitureCard  from "./VoitureCard";



export function Voitures () {


    return(
    
        <div className="voiture-card-all">
        <div >
            {voitures.map((voiture, id) => (
                <VoitureCard key={id} voiture={voiture} />
            ))}
        </div>
        </div>
    )
}