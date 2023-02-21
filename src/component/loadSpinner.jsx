import React from "react";


import loaderImg from "../data/logoCastle.png"

import "../styles/index.css"

export function Loader () {

    return (
        <div className="page-loader">
            <div className="placement">
                <img src={loaderImg} />
                <div className="placement-spinner"><div class="loader"></div></div>
            </div>
        </div>
    )
}