import React, { Component } from "react";
import { Album } from "./album";
import hiphop from "../assets/hip-hop.jpg";
import rock from "../assets/rock.jpg";
import metal from "../assets/metal.jpg";
import tens from "../assets/2010.jpg";
import twos from "../assets/2000.jpg";

export class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="suggestion mt-6 ml-4">
        <div className="header flex relative">
          <div className="headline text-spotify-white font-circularStdBold text-2xl hover:cursor-pointer hover:underline">
            {this.props.headline}
          </div>
          <div className="showall absolute bottom-0 right-5 text-sm text-spotify-text-color font-circularStdBold hover:underline hover:cursor-pointer">
            Tümünü göster
          </div>
        </div>
        <div className="flex justify-between mr-4 mt-4 h-fit">
          <Album
            name="Hip Hop Mix"
            expl="Pop Smoke, Eminem, Drake ve daha fazlası"
            pic={hiphop}
          ></Album>
          <Album
            name="Rock Mix"
            expl="Athena, Metallica, AC/DC ve daha fazlası"
            pic={rock}
          ></Album>
          <Album
            name="Metal Mix"
            expl="Iron Maiden, Elysion, Megadeth ve daha fazlası"
            pic={metal}
          ></Album>
          <Album
            name="2010'lar Mix"
            expl="Powerwolf, Lil Rae, Cem Adrian ve daha fazlası"
            pic={tens}
          ></Album>
          <Album
            name="2000'ler Mix"
            expl="Pilli Bebek, Emre Aydın, Athena ve daha fazlası"
            pic={twos}
          ></Album>
        </div>
      </div>
    );
  }
}
