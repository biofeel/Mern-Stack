import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deletebutton from '../components/DeleteButton';
import UpdateButton from '../components/UpdateButton';
import { Link } from "react-router-dom"

const Main = () => {

    const [authors, setAuthors] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const reloadList = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/showAuthors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err.response))
    }, [refresh])


    return (

        <div>
            <h1>Favorite authors</h1>
            <Link to={'/new'} >Add an author</Link>
            <h2>We have quotes by:</h2>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Action Available</td>
                    </tr>
                </thead>
                <tbody>
                    {authors ?
                        authors.map((author, i) => (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <UpdateButton id={author._id} />
                                </td>
                                <td>
                                    <Deletebutton id={author._id} reloadList={reloadList} />
                                </td>
                            </tr>
                        )) : <p>Loading...</p>
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Main;