import React, { Component } from 'react';
import classes from './MyNewComponents.module.css';



class MyNewComponent extends Component{
    render(){
        return(
            <div className={classes.content}>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>

        );

    }
}

export default MyNewComponent;



