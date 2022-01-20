import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Starships = () => {
    const [starships, setStarships] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res => { //successful
                console.log(res.data)
                setStarships(res.data)

            })
            .catch(error => {
                // handle error
                setStarships(null)
                console.log(error);
                setError('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg')
            })
    }, [id])

    return (
        <div>
            {
                starships ? (
                    <div>
                        <h1> Starship Name: {starships.name}</h1>
                        <h3> Model: {starships.model}</h3>
                        <h3> Manufacturer: {starships.manufacturer}</h3>
                        <h3> Cost In Credits: {starships.cost_in_credits}</h3>
                        <h3> Length: {starships.length}</h3>
                        <h3> Max Atmosphering Speed: {starships.max_atmosphering_speed}</h3>
                        <h3> Crew: {starships.crew}</h3>
                        <h3> Passengers: {starships.passengers}</h3>
                    </div>
                ) :
                    <img src={error} alt="These are not the droids you are looking for" />}
        </div>
    )
}

export default Starships