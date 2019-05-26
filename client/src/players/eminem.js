import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';
import './eminem.css';
import ly from "../music/eminem/1.mp3";
import notafraid from "../music/eminem/2.mp3";
import rapgod from "../music/eminem/3.mp3";
import nolove from "../music/eminem/4.mp3";
import space from "../music/eminem/5.mp3";
import monster from "../music/eminem/6.mp3";
import love from "../music/eminem/7.mp3";
import life from "../music/eminem/8.mp3";
import mockingbird from "../music/eminem/9.mp3";
import Stan from "../music/eminem/10.mp3";


function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class Emplayer extends Component {
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
        case "Lose Yourself":
          track = ly;
          break;
        case "Not Afraid":
          track = notafraid;
          break;
        case "Rap God":
          track = rapgod;
          break;
        case "No Love":
          track = nolove;
          break;
          case "Space Bound":
            track = space;
          break;
          case "The Monster":
            track = monster;
          break;
          case "Love The Way You Lie":
            track = love;
          break;
          case "25 to Life":
            track = life;
          break;
          case "Mockingbird":
            track = mockingbird;
          break;
          case "Stan":
            track = Stan;
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
      { id: 1, title: "Lose Yourself" },
      { id: 2, title: "Not Afraid" },
      { id: 3, title: "Rap God" },
      { id: 4, title: "No Love" },
      { id: 5, title: "Space Bound" },
      { id: 6, title: "The Monster" },
      { id: 7, title: "Love The Way You Lie" },
      { id: 8, title: "25 to Life" },
      { id: 9, title: "Mockingbird" },
      { id: 10, title: "Stan" }
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
        <h1 className = "title">Top 10 of Eminem</h1>
        <div className="emcover" /><br />
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

export default withRouter (Emplayer);
