import {Component} from "react";

import {Header} from '../component/Header';
import {Banner} from '../component/Banner';
import {Voitures} from '../component/Voiture';

export function Accueil () {

    return (
        <div>
            <Header />
            <Banner />
            <Voitures />
        </div>
        )
}
export default Accueil;