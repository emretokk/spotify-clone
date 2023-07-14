import React, { Component } from "react";
import "./index.css";
import { Left } from "./left";
import { Feed } from "./feed";
import { Right } from "./right";
import { Footer } from "./zfooter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App-Container bg-black w-screen h-screen">
        <div className="main-wrapper grid grid-cols-5 gap-2 w-screen h-[39.33rem]">
          <Left></Left>
          <Feed></Feed>
          <Right></Right>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
