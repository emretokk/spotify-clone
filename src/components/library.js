import React, { Component } from "react";

export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="library rounded-lg bg-spotify-background-gray h-full w-full"></div>
    );
  }
}
