import React from "react";
import headerIcon from '../assets/images/pokemon-memory.png'

export default function Header() {
    return (
        <div className="container-fluid p-0 m-0 mb-4">
            <div className="header">
                <img src={headerIcon} alt='pokemon memory header' className="w-50 py-4"/>
            </div>

            <div className="seperator">
                <div className="poke-melon">
                    <div className="poke-button"></div>
                </div>
            </div>
        </div>
    )
}