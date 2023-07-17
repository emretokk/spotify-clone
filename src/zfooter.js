import React, { Component } from "react";
import { PlayingCover } from "./components/playingCover";
import { PlayingBar } from "./components/playingBar";
import { PlayingOptions } from "./components/playingOptions";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer col-start-1 flex justify-between sticky bottom-0 bg-black w-screen h-24">
        <PlayingCover
          curPlayingName="Fly Forever"
          curPlayingArtist="Pentagram"
          liked="1"
        ></PlayingCover>
        <PlayingBar curPlayingLength="6:24"></PlayingBar>
        <PlayingOptions volume="10"></PlayingOptions>
      </div>
    );
  }
}
