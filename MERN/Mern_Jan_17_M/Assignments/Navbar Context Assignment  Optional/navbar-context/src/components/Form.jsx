import React, {useContext, useState} from "react";
import UserContext from "../contexts/UserContext";

const Form = (props) => {
    const [input ,setInput] = useState('')
    const context = useContext(UserContext)
    console.log(context)

    const handleSubmit = (e) => {
        e.preventDefault()
        context.setValue(input)
    }
    
    return(
        <form className="d-flex gap-3 p-3" onSubmit={handleSubmit} >
            <label htmlFor="name">Enter Your Name : </label>
            <input  
                type="text" 
                value={input} 
                name="name" 
                onChange={(e) => setInput(e.target.value)} />
            <button>Show Your Name</button>
        </form>
    )
}
export default Form