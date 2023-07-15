import React, { Component } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import flyForever from "../assets/fly-forever.jpg";

export class PlayingCover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOnCover: false,
    };
  }
  handleInCover = () => {
    this.setState({ mouseOnCover: true });
  };
  handleOutCover = () => {
    this.setState({ mouseOnCover: false });
  };
  render() {
    return (
      <div className="curPlaying w-1/4 flex items-center">
        <div
          className="cover-container relative w-14 h-14 mx-4 hover:cursor-pointer"
          onMouseEnter={this.handleInCover}
          onMouseLeave={this.handleOutCover}
        >
          <SlArrowDown
            className={
              this.state.mouseOnCover
                ? "coverArrow absolute right-0 mr-1 mt-1 p-1 rounded-full text-2xl text-spotify-text-color bg-spotify-background-light-gray-2 hover:text-[25px] hover:text-white hover:bg-spotify-background-light-gray-1"
                : "hidden"
            }
          />
          <img className="coverPic rounded" src={flyForever} alt="cover"></img>
        </div>
        <div className="curPlaying-data flex flex-col justify-between gap-1 font-circularStdBook text-sm">
          <div className="curPlaying-name text-white hover:underline hover:cursor-pointer">
            {this.props.curPlayingName}
          </div>
          <div className="curPlaying-artist text-spotify-text-color text-xs leading-1 hover:underline hover:cursor-pointer">
            {this.props.curPlayingArtist}
          </div>
        </div>
        <div className="liked text-spotify-text-color text-lg ml-6">
          {this.props.liked ? (
            <AiFillHeart className="text-spotify-green" />
          ) : (
            <AiOutlineHeart />
          )}
        </div>
      </div>
    );
  }
}
