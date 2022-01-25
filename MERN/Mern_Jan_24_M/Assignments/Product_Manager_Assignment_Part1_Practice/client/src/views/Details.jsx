import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom"


const Detail = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/showOneProduct/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    },[])

    return (
            product ? 
                <div>
                    <h1>Product Details</h1>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
                : <p>Loading...</p>
    )

};

export default Detail;