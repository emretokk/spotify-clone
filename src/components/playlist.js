import React, { Component } from "react";
import { BsDot } from "react-icons/bs";

export class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="playlist w-76 h-16 flex items-center pl-2 mx-2 hover:bg-spotify-background-light-gray-1 hover:rounded-lg hover:cursor-pointer">
        <div className="cover-container ">
          <img
            src={this.props.coverPicture}
            alt="cover"
            className="w-12 h-12 object-cover rounded"
          ></img>
        </div>

        <div className="info-container flex flex-col text-sm text-white ml-4 whitespace-nowrap">
          <div className="playlistName font-circularStdBold">
            {this.props.playlistName}
          </div>
          <div className="bottom-info flex flex-row font-circularStdMed text-sm text-spotify-text-color">
            <div className="text-info flex">
              {this.props.playlistType} <BsDot className=" text-xl" />{" "}
              {this.props.count ? this.props.count + " şarkı" : ""}
              {this.props.owner ? this.props.owner : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
