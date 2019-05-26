import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';
import './dragons.css';
import believer from "../music/Dragons/1.mp3";
import thunder from "../music/Dragons/2.mp3";
import dream from "../music/Dragons/3.mp3";
import demons from "../music/Dragons/4.mp3";
import river from "../music/Dragons/5.mp3";
import SaM from "../music/Dragons/6.mp3";
import WiT from "../music/Dragons/7.mp3";
import WtW from "../music/Dragons/8.mp3";
import time from "../music/Dragons/9.mp3";
import radio from "../music/Dragons/10.mp3";


function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class Drplayer extends Component {
  constructor(props){
    super(props)
  this.state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null
  };
  }

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "Believer":
          track = believer;
          break;
        case "Thunder":
          track = thunder;
          break;
        case "Dream":
          track = dream;
          break;
        case "Demons":
          track = demons;
          break;
          case "The River":
            track = river;
          break;
          case "Smoke and Mirrors":
            track = SaM;
          break;
          case "Whatever it Takes":
            track = WiT;
          break;
          case "Walking the Wire":
            track = WtW;
          break;
          case "It's Time":
            track = time;
          break;
          case "Radioactive":
            track = radio;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        console.log(this.player.src)
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
  }

  render() {
    const list = [
      { id: 1, title: "Believer" },
      { id: 2, title: "Thunder" },
      { id: 3, title: "Dream" },
      { id: 4, title: "Demons" },
      { id: 5, title: "The River" },
      { id: 6, title: "Smoke and Mirrors" },
      { id: 7, title: "Whatever it Takes" },
      { id: 8, title: "Walking the Wire" },
      { id: 9, title: "It's Time" },
      { id: 10, title: "Radioactive" }
    ].map(item => {
      return (
        <li className="collection-item grey"
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
        >
          {item.title}
        </li>
      );
    });

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <>
      <div className="player">
        <h1 className = "title">Top 10 of Imagine Dragons</h1>
        <div className="dcover" /><br />
        <div className="collection">{list}</div>
        <div className="btnplay">
          {this.state.player === "paused" && (
            <Button onClick={() => this.setState({ player: "playing" })}>
              <i class="fa fa-play"></i>
            </Button>
          )}
          {this.state.player === "playing" && (
            <Button variant="light" onClick={() => this.setState({ player: "paused" })}>
              <i class="fa fa-pause"></i>
            </Button>
          )}
          {this.state.player === "playing" || this.state.player === "paused" ? (
            <Button variant="light" onClick={() => this.setState({ player: "stopped" })}>
              <i class="fa fa-stop"></i>
            </Button>
          ) : (
            ""
          )}
        </div>
        {this.state.player === "playing" || this.state.player === "paused" ? (
          <div className="time">
            {currentTime} / {duration}
          </div>
        ) : (
          ""
        )}
        <audio ref={ref => (this.player = ref)} />
        </div>
      </>
    );
  }
}

export default withRouter (Drplayer);
