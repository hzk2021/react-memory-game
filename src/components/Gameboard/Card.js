import React from "react";

export default function Card({pokemonImage, pokemonName, clickEvent}) {
    return (
        <div className="col-auto card shadow-lg hover-zoom" role="button" onClick={clickEvent.bind(this, pokemonName)}>
            <img src={pokemonImage} alt="pokemon pic"></img>
            <p className="text-capitalize fw-bold">{pokemonName}</p>
        </div>
    )
}
