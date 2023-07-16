import React, { Component } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import me from "../assets/me.jpg";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header sticky gap-2 flex items-center w-full h-16 rounded-t-lg text-spotify-background-light-gray-6">
        <div className="icoContainer ml-4 w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:cursor-pointer hover:text-white">
          <MdKeyboardArrowLeft className="text-3xl"></MdKeyboardArrowLeft>
        </div>
        <div className="icoContainer w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:cursor-pointer hover:text-white">
          <MdKeyboardArrowRight className="text-3xl"></MdKeyboardArrowRight>
        </div>
        <div className="spacer grow"></div>
        <div className="icoContainer w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:w-9 hover:h-9 hover:cursor-pointer">
          <TbUsersGroup className="text-xl text-white "></TbUsersGroup>
        </div>

        <div className="profilePic mr-4 w-8 h-8 bg-[#131313] rounded-full flex justify-center items-center hover:w-9 hover:h-9 hover:cursor-pointer">
          <img
            className="rounded-full w-6 h-6 object-cover"
            alt="profile"
            src={me}
          ></img>
        </div>
      </div>
    );
  }
}
