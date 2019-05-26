import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';
import './lpstyle.css';
import noBodyCanSaveMeNow from "../music/LP/1.mp3";
import numb from "../music/LP/2.mp3";
import iridt from "../music/LP/3.mp3";
import bth from "../music/LP/4.mp3";
import wte from "../music/LP/5.mp3";
import intheEnd from "../music/LP/6.mp3";
import myremains from "../music/LP/7.mp3";
import closer from "../music/LP/8.mp3";
import burn from "../music/LP/9.mp3";
import crawl from "../music/LP/10.mp3";


function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class LPplayer extends Component {
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
        case "Nobody can save me now":
          track = noBodyCanSaveMeNow;
          break;
        case "Numb":
          track = numb;
          break;
        case "Iridescent":
          track = iridt;
          break;
        case "Breaking The Habbit":
          track = bth;
          break;
          case "Waiting for the End":
            track = wte;
          break;
          case "In The End":
            track = intheEnd;
          break;
          case "In My Remains":
            track = myremains;
          break;
          case "One Step Closer":
            track = closer;
          break;
          case "Burn It Down":
            track = burn;
          break;
          case "Crawling":
            track = crawl;
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
      { id: 1, title: "Nobody can save me now" },
      { id: 2, title: "Numb" },
      { id: 3, title: "Iridescent" },
      { id: 4, title: "Breaking the Habbit" },
      { id: 5, title: "Waiting for the End" },
      { id: 6, title: "In The End" },
      { id: 7, title: "In My Remains" },
      { id: 8, title: "One Step Closer" },
      { id: 9, title: "Burn It Down" },
      { id: 10, title: "Crawling" }
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
        <h1 className = "title">Top 10 of Linkin Park</h1>
        <div className="lpcover" /><br />
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

export default withRouter (LPplayer);
