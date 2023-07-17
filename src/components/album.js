import React, { Component } from "react";
import { BsFillPlayFill } from "react-icons/bs";

export class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onCard: "false",
    };
  }
  handleEnter = () => {
    this.setState({ onCard: true });
  };
  handleLeave = () => {
    this.setState({ onCard: false });
  };
  render() {
    return (
      <div
        className="album rounded-lg bg-spotify-background-light-gray-3 w-40 h-64 hover:bg-spotify-background-light-gray-1 hover:cursor-pointer flex flex-col px-4"
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <div className="cont flex relative h-2/3">
          <div className="cover flex items-center">
            <img alt="cover" src={this.props.pic} className="rounded-lg"></img>
          </div>
          {this.state.onCard == true ? (
            <div className="butt absolute bg-spotify-green-1 w-8 h-8 rounded-full right-2 bottom-6 hover:cursor-pointer hover:bg-spotify-green-2 hover:w-9 hover:h-9 hover:right-[0.4rem] hover:bottom-[1.4rem] flex items-center justify-center">
              <BsFillPlayFill className="text-black text-xl"></BsFillPlayFill>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="info h-1/3 flex flex-col justify-center">
          <div className="headline text-white font-circularStdBold">
            {this.props.name}
          </div>
          <div className="explanation text-spotify-text-color text-[12px] font-circularStdBook">
            {this.props.expl}
          </div>
        </div>
      </div>
    );
  }
}
