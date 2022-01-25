import React, { useState } from 'react'
import axios from 'axios';


const Form = (props) => {

    const {reloadList} = props
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/addProduct', {
            title,
            price,
            description
        })
            .then(res=>{
                setTitle("")
                setPrice(0)
                setDescription("")
                reloadList()
            })
            .catch(err=>console.log(err.response.data))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <button> Submit</button>
        </form>
    )
}

export default Form;