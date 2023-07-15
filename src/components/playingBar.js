import React, { Component } from "react";
import { LiaRandomSolid } from "react-icons/lia";
import { SlLoop } from "react-icons/sl";
import { PiSkipBackFill, PiSkipForwardFill, PiPauseFill } from "react-icons/pi";

export class PlayingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curMin: 0,
      curSec1: 0,
      curSec2: 0,
    };
    setInterval(this.handleTime, 1000);
  }
  handleTime = () => {
    this.setState({ curSec2: this.state.curSec2 + 1 });
    if (this.state.curSec2 === 9) {
      this.setState({ curSec1: this.state.curSec1 + 1 });
      this.setState({ curSec2: 0 });
    }
    if (this.state.curSec1 === 5 && this.state.curSec2 === 9) {
      this.setState({ curMin: this.state.curMin + 1 });
      this.setState({ curSec1: 0 });
    }
  };

  render() {
    return (
      <div className="curBar-container flex flex-col items-center w-2/4 text-spotify-text-color">
        <div className="curIcons h-1/2 flex pt-4 gap-5 justify-center items-center text-2xl">
          <LiaRandomSolid className="hover:text-white"></LiaRandomSolid>
          <PiSkipBackFill className="hover:text-white"></PiSkipBackFill>
          <div className="pause-container w-8 h-8 hover:h-[2.1rem] hover:w-[2.1rem] flex justify-center items-center rounded-full bg-spotify-white">
            <PiPauseFill className="text-black text-base "></PiPauseFill>
          </div>
          <PiSkipForwardFill className="hover:text-white"></PiSkipForwardFill>
          <SlLoop className="text-lg hover:text-white"></SlLoop>
        </div>
        <div className="progressBar h-1/2 flex w-[40rem] gap-2 font-circularStdBook text-xs">
          <div className="curTime flex items-center">
            {this.state.curMin}:{this.state.curSec1}
            {this.state.curSec2}
          </div>
          <div className="timeBar-container relative w-full flex justify-center items-center">
            <div className="timeBar w-[38rem] h-1 bg-spotify-background-light-gray-4"></div>
            <div className="absolute left-0 w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div className="targetTime flex items-center">
            {this.props.curPlayingLength}
          </div>
        </div>
      </div>
    );
  }
}
