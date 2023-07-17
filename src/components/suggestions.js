import React, { Component } from "react";
import { Suggestion } from "./suggestion";

export class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="suggestions-container">
        <Suggestion headline="En çok dinlediğin mix'ler"></Suggestion>
        <Suggestion headline="Sana Özel Bölümler"></Suggestion>
        <Suggestion headline="Yakınlarda Çalınanlar"></Suggestion>
      </div>
    );
  }
}
