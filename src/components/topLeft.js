import React, { Component } from "react";
import { GoHomeFill, GoSearch } from "react-icons/go";

export class TopLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="topLeft flex flex-col justify-center gap-4 text-spotify-text-color rounded-lg mb-2 bg-spotify-background-gray w-full h-32">
        <div className="home flex flex-row hover:text-white hover:cursor-pointer font-circularStdBold">
          <GoHomeFill className=" ml-6 mr-4 text-2xl"></GoHomeFill>
          <div className="text-sm leading-7">Ana Sayfa</div>
        </div>
        <div className="search flex flex-row hover:text-white hover:cursor-pointer font-circularStdBold">
          <GoSearch className="ml-6 mr-4 text-2xl"></GoSearch>
          <div className="text-sm leading-7">Ara</div>
        </div>
      </div>
    );
  }
}
