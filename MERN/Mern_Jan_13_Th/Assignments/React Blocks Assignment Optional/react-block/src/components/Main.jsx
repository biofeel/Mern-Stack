import React, { Component } from 'react'
import './../styles/style.css'

class Main extends Component {

    render() {
        return (
            <div className='main' id='boxline'>
                {this.props.children}
            </div>
        )
    }
}

export default Main