import React, { Component } from "react";
import { AiOutlinePlaySquare, AiOutlineExpandAlt } from "react-icons/ai";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { BsFillVolumeDownFill } from "react-icons/bs";

export class PlayingOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: "10",
      mouseOnVolume: "false",
    };
  }
  mouseOnVolumeBar = () => {
    this.setState({ mouseOnVolume: "true" });
  };
  mouseOutVolumeBar = () => {
    this.setState({ mouseOnVolume: "false" });
  };
  render() {
    return (
      <div className="curOptions w-1/4 text-xl mr-4 gap-3 text-spotify-background-light-gray-5 flex justify-end items-center">
        <AiOutlinePlaySquare className="hover:text-white hover:cursor-pointer"></AiOutlinePlaySquare>
        <TbMicrophone2 className="hover:text-white hover:cursor-pointer"></TbMicrophone2>
        <HiOutlineQueueList className="hover:text-white hover:cursor-pointer"></HiOutlineQueueList>
        <TbDevices2 className="hover:text-white"></TbDevices2>
        <BsFillVolumeDownFill className="hover:text-white"></BsFillVolumeDownFill>
        <div className="volumeBar-wrapper ">
          <div
            className="volumeBar-container relative w-24 h-10 flex items-center"
            onMouseEnter={this.mouseOnVolumeBar}
            onMouseLeave={this.mouseOutVolumeBar}
          >
            <div
              className={`volumeBar w-full h-1 bg-spotify-background-light-gray-4`}
            >
              <div
                className={
                  this.state.mouseOnVolume === "true"
                    ? `curVolumeBar h-full bg-spotify-green w-10`
                    : `curVolumeBar h-full bg-white w-10`
                }
              ></div>
            </div>
            <div
              className={
                this.state.mouseOnVolume === "true"
                  ? `volumeCircle absolute w-3 h-3 rounded-full bg-white left-10`
                  : `volumeCircle hidden`
              }
            ></div>
          </div>
        </div>
        <AiOutlineExpandAlt className="hover:text-white"></AiOutlineExpandAlt>
      </div>
    );
  }
}
