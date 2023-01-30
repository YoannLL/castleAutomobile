import { Component } from "react";
import logo from '../data/logoCastle.png';

import "../styles/header.css"

export function Header () {
    return(
        <div className="fond-header" >
            
            <div className="logo">
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