import React, { Component } from "react";
import { AiOutlineUserAdd, AiOutlineClose } from "react-icons/ai";
import { Friend } from "./friend";
import bir from "../assets/1.jpg";
import iki from "../assets/2.jpg";
import uc from "../assets/3.jpg";
import dort from "../assets/4.jpg";
import bes from "../assets/5.jpg";
import alti from "../assets/6.jpg";
import yedi from "../assets/7.jpg";
import sekiz from "../assets/8.jpg";
import dokuz from "../assets/9.jpg";
import on from "../assets/10.jpg";

export class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="friends-tab px-6 h-[40rem]  overflow-y-scroll">
        <div className="headline-wrapper mt-8 flex items-center">
          <div className="headline w-1/2 text-white font-circularStdBold text-sm hover:cursor-default">
            Arkadaş Etkinliği
          </div>
          <div className="iconnss flex justify-end gap-3 w-1/2 ">
            <div className="icoon w-7 h-7 hover:bg-spotify-background-light-gray-1 rounded-full flex justify-center items-center">
              <AiOutlineUserAdd className="w-5 h-5 text-spotify-text-color hover:text-white hover:cursor-pointer"></AiOutlineUserAdd>
            </div>
            <div className="icoon w-7 h-7 hover:bg-spotify-background-light-gray-1 rounded-full flex justify-center items-center">
              <AiOutlineClose className="w-5 h-5 text-spotify-text-color hover:text-white hover:cursor-pointer"></AiOutlineClose>
            </div>
          </div>
        </div>
        <div className="friends-container mt-4">
          <Friend
            pic={bir}
            name="Emily"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={iki}
            name="Fred"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={uc}
            name="John"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={dort}
            name="Saul"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={bes}
            name="Robin"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={alti}
            name="Kendrick"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={yedi}
            name="Lauren"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={sekiz}
            name="Adam"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={dokuz}
            name="Alisson"
            song="Never Forever"
            artist="Elysion"
            album="Silent Scream"
            time="12 dk."
          ></Friend>
          <Friend
            pic={on}
            name="Karen"
            song="La Vie En Rose"
            artist="Daniela Andrae"
            album="La Vie En Rose"
            time="16 sa."
          ></Friend>
        </div>
      </div>
    );
  }
}
