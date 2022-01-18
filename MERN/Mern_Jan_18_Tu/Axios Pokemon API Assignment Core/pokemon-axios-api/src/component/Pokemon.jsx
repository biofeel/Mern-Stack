import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState([]);

    const fetchData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=1')
            .then((response) => {
                setPokemonNames(response.data.results);
                console.log(response.data);
            })
    }

    return (
        <div className='mx-auto text-center card'>
            <div className="p-3">
                <h2>Fetch All 807 Pokemon</h2>
                <button onClick={fetchData} className='btn-info m-3'>Fetch Pokemon</button>
                {pokemonNames.map((pokemon, i) => {
                    return (
                        <p key={i} >{pokemon.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon