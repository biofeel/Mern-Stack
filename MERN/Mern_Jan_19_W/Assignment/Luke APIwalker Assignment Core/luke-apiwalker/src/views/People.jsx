import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const People = () => {
    const [people, setPeople] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => { //successful
                console.log(res.data)
                setPeople(res.data)
            })
            .catch(error => {
                // handle error
                setPeople(null)
                console.log(error);
                setError('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg')
            })
    }, [id])

    return (
        <div>
            {
                people ? (
                    <div>
                        <h1> Name: {people.name} </h1>
                        <h3> Height: {people.height} cm</h3>
                        <h3> Mass: {people.mass} kg</h3>
                        <h3> Hair Color: {people.hair_color}</h3>
                        <h3> Skin Color: {people.skin_color}</h3>
                        <h3> Eye Color: {people.eye_color}</h3>
                        <h3> Birth Year: {people.birth_year}</h3>
                        <h3> Gender: {people.gender}</h3>
                        <h3> Home World: {people.homeworld}</h3>
                    </div>
                    ) : 
                    <img src={error} alt="These are not the droids you are looking for"/>}
        </div>
    )
}

export default People