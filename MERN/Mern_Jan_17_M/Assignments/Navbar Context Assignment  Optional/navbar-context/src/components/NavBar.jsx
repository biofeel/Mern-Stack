import React, {useContext} from "react";
import UserContext from "../contexts/UserContext";

const NavBar = props => {
    const context = useContext(UserContext)
    return(
        <div className="bg-info text-black navbar">
            {
            context.value ?
            <h4> Hello {context.value}!</h4> :
            ""
            }
            
        </div>
    )
}
export default NavBar