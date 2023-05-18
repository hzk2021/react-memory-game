import React, { useState, useEffect } from "react";
import Card from "./Card";
import Scoreboard from "../Scoreboard/Scoreboard";
import { ScoreContext } from "../../Contexts/ScoreContext";
import { shuffleArray } from "../../Utilities/shuffleArray";

export default function Gameboard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [pokemonNames, setPokemonNames] = useState([]);
    
    const [pokemons, setPokemons] = useState([{
        image: "",
        name: ""
    }]);

    const fetchPokemons = async (number) =>{
        const pokemons = [];
        const url = `https://pokeapi.co/api/v2/pokemon/`
        for (let i = 1; i <= number; i++) {
            const response = await fetch(url + i);
            const pokemonInfo = await response.json();
            const pokemonImage = pokemonInfo.sprites.front_default;
            const pokemonName = pokemonInfo.name;

            pokemons.push({
                image: pokemonImage,
                name: pokemonName
            })
        }

        return pokemons;
    }

    const checkGamestate = (pokemon_name) => {
        if (pokemonNames.includes(pokemon_name)) {
            gameLost();
        } else {
            gameContinues(pokemon_name);
        }
    }

    const gameLost = () => {
        setScore(0);
        setPokemonNames([]);
    }

    const gameContinues = (pokemon_name) => {
        setScore(score + 1);
        setPokemonNames([...pokemonNames, pokemon_name]);
        shufflePokemons();
    }

    const shufflePokemons = () => {
        let newPokemons = pokemons;
        setPokemons(shuffleArray(newPokemons));
    }

    useEffect(() => {
        fetchPokemons(12).then(result => setPokemons(result));
    }, []);

    return (
        <ScoreContext.Provider value={score}>

            <div className="gameboard">
                <Scoreboard />  

                <div className="row">
                    {pokemons.map(p => {
                        return <Card key={p.name} 
                                pokemonImage={p.image} 
                                pokemonName={p.name}
                                clickEvent={checkGamestate}/>
                    })}
                </div>
            </div>

        </ScoreContext.Provider>
    )
}
