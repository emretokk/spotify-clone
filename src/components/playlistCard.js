import React, { Component } from "react";
import { BsFillPlayFill } from "react-icons/bs";

export class PlaylistCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onCard: false,
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
        className="h-20 relative flex bg-spotify-background-light-gray-1 hover:bg-spotify-background-light-gray-4 hover:cursor-pointer rounded-md"
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        <img
          alt="cover"
          src={this.props.pic}
          className="w-20 h-full object-cover rounded-l-md"
        ></img>
        <div className="text-spotify-white font-circularStdBold my-auto ml-4 w-40">
          {this.props.name}
        </div>
        {this.state.onCard ? (
          <div className="absolute w-11 h-11 right-4 bottom-[18px] hover:w-12 hover:h-12 hover:bottom-[16px] hover:right-[14px] hover:bg-spotify-green-2 rounded-full shadow-lg bg-spotify-green-1 flex items-center justify-center">
            <BsFillPlayFill className="text-2xl"></BsFillPlayFill>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
