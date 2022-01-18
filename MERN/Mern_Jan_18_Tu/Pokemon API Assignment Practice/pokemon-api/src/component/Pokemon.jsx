import React, { useState } from 'react'

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState([]);

    const clickHandler = (e) => {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0')
            .then(response => response.json())
            .then(response => setPokemonNames(response.results))
    }

    return (
        <div className='mx-auto text-center card'>
            <div className="p-3">
                <h2> Fetch All 807 Pokemon</h2>
                <button onClick={clickHandler} className='btn-info m-3'>Fetch Pokemon</button>
                {pokemonNames.length > 0 && pokemonNames.map((pokemon, i) => {
                    return (
                        <p key={i} >{pokemon.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon