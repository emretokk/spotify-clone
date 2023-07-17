import React, { Component } from "react";
import { PlaylistCard } from "./playlistCard";
import liked from "../assets/liked-songs.jpg";
import chill from "../assets/chill.jpg";
import drill from "../assets/drill.jpg";
import muzeyyen from "../assets/muzeyyen.jpg";
import sago from "../assets/sagobasyapitlar.jpg";
import explosive from "../assets/explosive.jpg";

export class PlaylistCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="playlist-cards-container">
        <div className="headline text-spotify-white ml-4 text-3xl font-circularStdBold">
          Günaydın
        </div>
        <div className="playlist-cards grid grid-cols-3 grid-rows-2 gap-6 px-4 mt-4 h-fit w-full">
          <PlaylistCard pic={liked} name="Beğenilen Şarkılar"></PlaylistCard>
          <PlaylistCard pic={chill} name="chill"></PlaylistCard>
          <PlaylistCard pic={drill} name="drill"></PlaylistCard>
          <PlaylistCard
            pic={muzeyyen}
            name="müzeyyen bu derin bir tutku"
          ></PlaylistCard>
          <PlaylistCard pic={sago} name="sago başyapıtlar"></PlaylistCard>
          <PlaylistCard pic={explosive} name="explosive trap"></PlaylistCard>
        </div>
      </div>
    );
  }
}
