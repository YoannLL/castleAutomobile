import {Component, useEffect, useState} from "react";

import {Header} from '../component/Header';
import {Slider} from '../component/Slider';
import {Voitures} from '../component/Voiture';
import {Footer} from '../component/Footer';

import {Loader} from "../component/loadSpinner";
import {SliderPhoto} from "../component/Slider";

export function Accueil () {

const [loader, setLoader] = useState(true);

useEffect (() => {

    setTimeout(() => {
      setLoader(false);
    }, 2000);

}, [])

    return loader ? (
        <Loader />
    ) : 
    (
        <div>
            <Header />
            <SliderPhoto />
            <Voitures />
            <Footer />
        </div>
        )
}
export default Accueil;