import React, { Component } from "react";
import { BiLibrary, BiPlus, BiRightArrowAlt } from "react-icons/bi";
import { GoSearch, GoTriangleDown } from "react-icons/go";
import { Playlist } from "./playlist";
import likedSongs from "../assets/liked-songs.jpg";
import beHumble from "../assets/bitch-be-humble.jpg";
import chill from "../assets/chill.jpg";
import drill from "../assets/drill.jpg";
import muzeyyen from "../assets/muzeyyen.jpg";
import sagobasyapitlar from "../assets/sagobasyapitlar.jpg";
import explosive from "../assets/explosive.jpg";
import elektro from "../assets/elektro.jpg";

export class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="library rounded-lg bg-spotify-background-gray w-full h-full">
        <div className="library-header mt-4 text-spotify-text-color">
          <div className="library-header-1 h-8 ml-6 flex items-center font-circularStdBold">
            <div className="library-wrapper flex hover:text-white hover:cursor-pointer">
              <BiLibrary className="text-2xl "></BiLibrary>
              <div className="text-sm leading-7 ml-4">Kitaplığın</div>
            </div>
            <div className="icon-shadow flex justify-center items-center ml-[4.5rem] mr-2 w-8 h-8 hover:rounded-full hover:bg-spotify-background-light-gray-3">
              <BiPlus className="text-2xl hover:text-white hover:cursor-pointer"></BiPlus>
            </div>
            <div className="icon-shadow flex justify-center items-center w-8 h-8 hover:rounded-full hover:bg-spotify-background-light-gray-3">
              <BiRightArrowAlt className="text-2xl hover:text-white hover:cursor-pointer"></BiRightArrowAlt>
            </div>
          </div>
          <div className="library-header-2 mt-4 mr-6 gap-2 flex whitespace-nowrap overflow-x-scroll font-circularStdMed">
            <div className="playlists-selector rounded-xl ml-5 px-2 py-1 bg-spotify-background-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-background-light-gray-2">
              Çalma Listeleri
            </div>
            <div className="podcasts-selector rounded-xl px-2 py-1 bg-spotify-background-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-background-light-gray-2">
              Podcastler ve Programlar
            </div>
            <div className="downloads-selector rounded-xl px-2 py-1 bg-spotify-background-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-background-light-gray-2">
              İndirilenler
            </div>
            <div className="artists-selector rounded-xl px-2 py-1 bg-spotify-background-light-gray-1 text-sm hover:text-white hover:cursor-pointer hover:bg-spotify-background-light-gray-2">
              Sanatçılar
            </div>
          </div>

          <div className="playlists h-[30rem] overflow-y-scroll">
            <div className="library-header-3 flex justify-between text-spotify-text-color mt-4">
              <div className="icon-shadow flex justify-center items-center ml-5 w-8 h-8 hover:rounded-full hover:cursor-pointer hover:bg-spotify-background-light-gray-2">
                <GoSearch className="text-xl"></GoSearch>
              </div>
              <div className="order-menu mr-2 flex font-circularStdBook text-sm justify-center items-center hover:text-white hover:cursor-pointer">
                Yakın Tarihli
                <GoTriangleDown className="text-2xl ml-2"></GoTriangleDown>
              </div>
            </div>
            <Playlist
              coverPicture={likedSongs}
              playlistName="Beğenilen Şarkılar"
              playlistType="Çalma Listesi"
              count="297"
            ></Playlist>
            <Playlist
              coverPicture={beHumble}
              playlistName="bitch be humble"
              playlistType="Çalma Listesi"
              owner="Emre"
            ></Playlist>
            <Playlist
              coverPicture={chill}
              playlistName="drill"
              playlistType="Çalma Listesi"
              owner="Emre"
            ></Playlist>
            <Playlist
              coverPicture={drill}
              playlistName="bitch be humble"
              playlistType="Çalma Listesi"
              owner="Emre"
            ></Playlist>
            <Playlist
              coverPicture={sagobasyapitlar}
              playlistName="sago başyapıtlar"
              playlistType="Çalma Listesi"
              owner="Emre"
            ></Playlist>
            <Playlist
              coverPicture={muzeyyen}
              playlistName="müzeyyen bu derin bir tutku"
              playlistType="Çalma Listesi"
              owner="Emre"
            ></Playlist>
            <Playlist
              coverPicture={explosive}
              playlistName="explosive trap"
              playlistType="Çalma Listesi"
              owner="Emre"
            ></Playlist>
            <Playlist
              coverPicture={elektro}
              playlistName="elektro"
              playlistType="Çalma Listesi"
              owner="Emre"
            ></Playlist>
          </div>
        </div>
      </div>
    );
  }
}
