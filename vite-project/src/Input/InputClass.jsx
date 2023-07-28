import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class InputClass extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      arr: []
    }
  }
  getName(e) {
    //   console.log("----", e.target.value)
    this.setState({ ...this.state, name: e.target.value })
  }
  click() {
    this.setState({ arr: [...this.state.arr, this.state.name] })
    this.setState({ name: "" })
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <label htmlFor="name">Name : </label>
        <input value={this.state.name} type="text" id="name" onChange={(e) => this.getName(e)} /><br />
        <Button variant="warning" onClick={() => this.click()}>Add Name</Button> <br /><br />
        <div style={{ color: "white", backgroundColor: "Violet" }}>
          {this.state.arr.map((e, i) => {
            return <h1 key={i}>{e}</h1>;
          })}
        </div>
      </>
    )
  }
}
