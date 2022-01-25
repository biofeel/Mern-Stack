import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const DeleteButton = (props) => {

    const {id, reloadList} = props
    const history = useHistory()

    const clickHandler = ()=>{
        axios.delete(`http://localhost:8000/delete/${id}`)
            .then(res=> {
            reloadList();
            history.push("/");
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <button onClick={clickHandler}>Delete</button>
        </div>
    )
};

export default DeleteButton;