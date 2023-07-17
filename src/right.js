import React, { Component } from "react";
import { Friends } from "./components/friends";

export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="right col-start-5 mr-2 rounded-lg bg-spotify-background-gray">
        <Friends></Friends>
      </div>
    );
  }
}
