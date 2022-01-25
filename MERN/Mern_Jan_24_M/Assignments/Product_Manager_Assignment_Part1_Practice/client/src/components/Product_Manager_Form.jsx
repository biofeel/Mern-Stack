import React, { useState } from 'react';
import axios from 'axios';

export default props => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    
    const onSubmitHandler = e => {
    e.preventDefault();
    //make a post request to create a new person
    axios.post('http://localhost:8000/api/product/new', {
        productName,
        productPrice,
        productDescription
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

return (
    <form onSubmit={onSubmitHandler}>
        <p>
            <label>Product Name: </label>
            <input type="text" onChange={e => setProductName(e.target.value)} value={productName} />
        </p>
        <p>
            <label>Price: </label>
            <input type="text" onChange={e => setProductPrice(e.target.value)} value={productPrice} />
        </p>
        <p>
            <label>Product Description: </label>
            <input type="text" onChange={e => setProductDescription(e.target.value)} value={productDescription} />
        </p>
        <input type="submit"></input>
    </form>
)
}