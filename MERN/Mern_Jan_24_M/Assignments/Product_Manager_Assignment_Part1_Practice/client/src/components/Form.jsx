import React, { useState } from 'react'
import axios from 'axios';


const Form = (props) => {

    const { reloadList } = props
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/addProduct', {
            title,
            price,
            description
        })
            .then(res => {
                setTitle("")
                setPrice("")
                setDescription("")
                reloadList()
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <button> Submit</button>
        </form>
    )
}

export default Form;