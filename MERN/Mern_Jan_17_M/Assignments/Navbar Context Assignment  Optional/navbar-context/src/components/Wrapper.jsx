import React from "react";

const Wrapper = props => {
    console.log("wrap")
    return(
        <div className=" wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper