import React, { Component } from "react";
import { TopLeft } from "./components/topLeft";
import { Library } from "./components/library";

export class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="left col-start-1 col-end-2 ml-2 flex flex-col">
        <TopLeft></TopLeft>
        <Library></Library>
      </div>
    );
  }
}
