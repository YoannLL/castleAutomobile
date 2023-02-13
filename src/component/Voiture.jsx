import { Component } from "react";
import Aos from "aos";

import "../styles/voiture.css"

import voitures from "../voitures/data.json"

import VoitureCard  from "./VoitureCard";



export function Voitures () {


    return(
        <div id="voiture-section">
            <div className="titre-voiture">
                <h2>Les Voitures</h2>
            </div>
            <div className="voiture-card-all">
            
                <div>
                    {voitures.map((voiture, id) => (
                    <VoitureCard key={id} voiture={voiture} />
                ))}
                </div>
            </div>
        </div>
    )
}