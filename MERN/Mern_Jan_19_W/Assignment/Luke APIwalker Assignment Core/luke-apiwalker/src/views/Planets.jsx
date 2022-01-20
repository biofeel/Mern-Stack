import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Planets = () => {
    const [planets, setPlanets] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => { //successful
                console.log(res.data)
                setPlanets(res.data)

            })
            .catch(error => {
                // handle error
                setPlanets(null)
                console.log(error);
                setError('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg')
            })
    }, [id])

    return (
        <div>
            {
                planets ? (
                    <div>
                        <h1> Planet Name: {planets.name}</h1>
                        <h3> Rotation Period: {planets.rotation_period} days</h3>
                        <h3> Orbital Period: {planets.orbital_period} days</h3>
                        <h3> Diameter: {planets.diameter} km</h3>
                        <h3> Climate: {planets.climate}</h3>
                        <h3> Gravity: {planets.gravity}</h3>
                        <h3> Terrain: {planets.terrain}</h3>
                        <h3> Surface Water: {planets.surface_water}</h3>
                        <h3> Population: {planets.population}</h3>
                    </div>
                ) :
                    <img src={error} alt="These are not the droids you are looking for" />}
        </div>
    )
}

export default Planets