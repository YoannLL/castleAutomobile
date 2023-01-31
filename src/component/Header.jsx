import { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../data/logoCastle.png';

import { Voitures } from "./Voiture";

import "../styles/header.css"

export function Header () {

    return(
        <div className="fond-header" >
            
            <div className="logo glass">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className="nav">
                    <li>Le garage</li>
                    <li>Nos voitures</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    )

}
export default Header;