import React, { Component } from 'react'

export default class Use_State_Class extends Component {

    constructor() {    // method
        super();
        this.state = {
            x: 0
        }
    }
    inc() {     // this is incriment method 
        this.setState({ x: this.state.x + 1 })
    }
    render() {
        return (
            <div>
                <h1>{this.state.x}</h1>
                <button onClick={() => {
                    this.inc();
                }}>Click me</button>
            </div>
        )
    }
}
