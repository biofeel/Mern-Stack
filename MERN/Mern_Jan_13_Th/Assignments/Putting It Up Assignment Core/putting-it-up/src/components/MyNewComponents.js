import React, { Component } from 'react';
import classes from './MyNewComponents.module.css';



class MyNewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    IncrementAge = () => {
        let age = this.state.age
        this.setState({age : age += 1});
    }

    render() {
        return (
            <div className={classes.content}>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.IncrementAge}>Birthday Button for {this.props.lastName} {this.props.firstName}</button>
            </div>
        );
    }
}

export default MyNewComponent;



