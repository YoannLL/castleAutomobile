import React from "react";


import loaderImg from "../data/logoCastle.png"

import "../styles/index.css"

export function Loader () {

    return (
        <div className="page-loader">
        <div class="lds-spinner placement"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}