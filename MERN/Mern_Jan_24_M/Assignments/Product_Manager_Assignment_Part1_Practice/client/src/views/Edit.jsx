import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Edit = () => {

    const history = useHistory()
    const {id} = useParams()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/showOneProduct/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    },[])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/update/${id}`, {
            title,
            price,
            description
        })
            .then(res=>{
                console.log("success")
                history.push("/")
            })
            .catch(err=>{
                console.log("fail")
                console.log(err.response.data)
            })
    }

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={onSubmitHandler}>
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
                    <input type="text"  onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <button> Submit</button>
            </form>
        </div>
    )

};

export default Edit;