import React, { Component } from "react";
import { Header } from "./components/header";
import { PlaylistCards } from "./components/playlistCards";
import { Suggestions } from "./components/suggestions";

export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="feed col-start-2 col-end-5 rounded-lg bg-gradient-to-b from-[#222222] from-0% via-[#121212] via-40% to-[#121212] to-100% overflow-x-hidden overflow-y-scroll h-[40rem]">
        <Header></Header>
        <PlaylistCards></PlaylistCards>
        <Suggestions></Suggestions>
      </div>
    );
  }
}
