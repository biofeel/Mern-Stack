import React from "react";

const Displaybox = (props) => {
    const newBox = [...props.box1]
    return (
        <div>
            {newBox.map((box, i) => {
                let style = {
                    backgroundColor: box.color,
                    width: box.size,
                    height: box.size,
                };
                return (
                    <div key={i} style={style}></div>)
            })}

        </div>
    );
}

export default Displaybox
