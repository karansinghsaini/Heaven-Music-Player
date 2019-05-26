import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';
import './adelestyle.css';
import hello from "../music/adele/1.mp3";
import send from "../music/adele/2.mp3";
import miss from "../music/adele/3.mp3";
import young from "../music/adele/4.mp3";
import remedy from "../music/adele/5.mp3";
import bridge from "../music/adele/6.mp3";
import river from "../music/adele/7.mp3";
import dark from "../music/adele/8.mp3";
import millions from "../music/adele/9.mp3";
import ask from "../music/adele/10.mp3";


function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class Adplayer extends Component {
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
        case "Hello":
          track = hello;
          break;
        case "Send Me Love":
          track = send;
          break;
        case "I Miss You":
          track = miss;
          break;
        case "When We Were Young":
          track = young;
          break;
          case "Remedy":
            track = remedy;
          break;
          case "Water Under The Bridge":
            track = bridge;
          break;
          case "River Lea":
            track = river;
          break;
          case "Love In The Dark":
            track = dark;
          break;
          case "Million Years Ago":
            track = millions;
          break;
          case "All I Ask":
            track = ask;
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
      { id: 1, title: "Hello" },
      { id: 2, title: "Send Me Love" },
      { id: 3, title: "I Miss You" },
      { id: 4, title: "When We Were Young" },
      { id: 5, title: "Remedy" },
      { id: 6, title: "Water Under The Bridge" },
      { id: 7, title: "River Lea" },
      { id: 8, title: "Love In The Dark" },
      { id: 9, title: "Million Years Ago" },
      { id: 10, title: "All I Ask" }
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
        <h1 className = "title">Top 10 of Adele</h1>
        <div className="cover" /><br />
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

export default withRouter (Adplayer);
