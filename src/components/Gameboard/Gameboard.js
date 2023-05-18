import React, { useState, useEffect } from "react";
import Card from "./Card";
import Scoreboard from "../Scoreboard/Scoreboard";
import { ScoreContext } from "../../Contexts/ScoreContext";
import { shuffleArray, sleep } from "../../Utilities/utils";

export default function Gameboard() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [pokemonNames, setPokemonNames] = useState([]);
    
    const [pokemons, setPokemons] = useState(null);

    const fetchPokemons = async (number) =>{
        // To simulate a longer data fetching process
        await sleep(100);

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
        setBestScore(score);
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
        <ScoreContext.Provider value={{score, bestScore}}>

            <div className="gameboard">
                <Scoreboard />  

                <div className="row">
                    {pokemons !== null  ?
                        pokemons.map(p => {
                            return <Card key={p.name} 
                                    pokemonImage={p.image} 
                                    pokemonName={p.name}
                                    clickEvent={checkGamestate}/>
                        })
                        :
                        <div className="d-flex justify-content-center h-100">
                        <div className="spinner-border" role="status"></div>
                        <span className="sr-only">Fetching Pokemon...</span>
                    </div>
                    }

                </div>
            </div>

        </ScoreContext.Provider>
    )
}
