import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';

const Display = (props) => {

    const {refresh, reloadList} = props
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:8000/showProducts`)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err.response))
    },[refresh])


    return (
        <div>
            <h1>All Products:</h1>
            {products?
                products.map((product, i) =>(
                    <div key ={i}>
                        <p><Link to={`/details/${product._id}`}>{product.title}</Link></p>
                        <DeleteButton id={product._id} reloadList={reloadList} />
                    </div>
                )): <p>Loading...</p>
            }

        </div>
    )

};

export default Display;