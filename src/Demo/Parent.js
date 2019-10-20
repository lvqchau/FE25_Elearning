import React, { Component } from "react";
import Children1 from "./Children1";
import Children2 from "./Children2";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children1: 1,
      children2: 2
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ children1: this.state.children1 + 1 })}
        >
          Change state children1
        </button>
        
        <button
          onClick={() => this.setState({ children2: this.state.children2 + 1 })}
        >
          Change state children2
        </button>

        <Children1 chidlren1={this.state.children1} />
        <Children2 children2={this.state.children2} />
      </div>
    );
  }
}

export default Parent;
