import React, { Component } from "react";
import { FiMusic } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

export class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="friend h-16 mt-4 flex gap-4">
        <div className="img-cont  w-1/4 h-full ">
          <img
            alt="human"
            src={this.props.pic}
            className="w-10 h-10 rounded-full object-cover  "
          ></img>
        </div>
        <div className="info w-full h-fullflex flex-col text-xs text-spotify-background-light-gray-5  font-circularStdBold whitespace-nowrap overflow-hidden">
          <div className="name text-spotify-text-color hover:text-white hover:underline hover:cursor-pointer">
            {this.props.name}
          </div>
          <div className="song text-[0.7rem] flex items-center ">
            {this.props.song}
            <BsDot></BsDot>
            {this.props.artist}
          </div>
          <div className="album text-[0.7rem] flex items-center">
            <FiMusic className="mr-1"></FiMusic>
            {this.props.album}
          </div>
        </div>
        <div className="activity w-1/6 h-full text-xs text-spotify-text-color font-circularStdBold whitespace-nowrap">
          {this.props.time}
        </div>
      </div>
    );
  }
}
