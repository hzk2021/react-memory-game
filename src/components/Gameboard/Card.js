import React from "react";

export default function Card({pokemonImage, pokemonName, clickEvent}) {
    return (
        <div className="col" onClick={clickEvent.bind(this, pokemonName)}>
            <img src={pokemonImage} alt="pokemon pic"></img>
            <p>{pokemonName}</p>
        </div>
    )
}
