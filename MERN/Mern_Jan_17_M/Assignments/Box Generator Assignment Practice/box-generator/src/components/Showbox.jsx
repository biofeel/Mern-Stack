import React, { useState } from "react";

const Showbox = (props) => {
    const [color, setcolor] = useState('');
    const [size, setsize] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        const box = {
            color: color,
            size: size + 'px'
        }

        props.addOneBox(box)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Color </label>
                <input onChange={(e) => setcolor(e.target.value)} type="text" value={color} />
                <label> Size </label>
                <input onChange={(e) => setsize(e.target.value)} type="text" value={size} />
                <button> Create Box </button>
            </form>
        </div>
    )
}

export default Showbox