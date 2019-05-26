import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';
import './charts.css';
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
import hello from "../music/adele/1.mp3";
import send from "../music/adele/2.mp3";
import miss from "../music/adele/3.mp3";
import young from "../music/adele/4.mp3";
import remedy from "../music/adele/5.mp3";
import bridge from "../music/adele/6.mp3";
import rver from "../music/adele/7.mp3";
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

class Charts extends Component {
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
            track = rver;
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
      { id: 1, title: "Nobody can save me now" },
      { id: 2, title: "Numb" },
      { id: 3, title: "Iridescent" },
      { id: 4, title: "Breaking the Habbit" },
      { id: 5, title: "Waiting for the End" },
      { id: 6, title: "In The End" },
      { id: 7, title: "In My Remains" },
      { id: 8, title: "One Step Closer" },
      { id: 9, title: "Burn It Down" },
      { id: 10, title: "Crawling" },
      { id: 11, title: "Lose Yourself" },
      { id: 12, title: "Not Afraid" },
      { id: 13, title: "Rap God" },
      { id: 14, title: "No Love" },
      { id: 15, title: "Space Bound" },
      { id: 16, title: "The Monster" },
      { id: 17, title: "Love The Way You Lie" },
      { id: 18, title: "25 to Life" },
      { id: 19, title: "Mockingbird" },
      { id: 20, title: "Stan" },
      { id: 21, title: "Believer" },
      { id: 22, title: "Thunder" },
      { id: 23, title: "Dream" },
      { id: 24, title: "Demons" },
      { id: 25, title: "The River" },
      { id: 26, title: "Smoke and Mirrors" },
      { id: 27, title: "Whatever it Takes" },
      { id: 28, title: "Walking the Wire" },
      { id: 29, title: "It's Time" },
      { id: 30, title: "Radioactive" },
      { id: 31, title: "Hello" },
      { id: 32, title: "Send Me Love" },
      { id: 33, title: "I Miss You" },
      { id: 34, title: "When We Were Young" },
      { id: 35, title: "Remedy" },
      { id: 36, title: "Water Under The Bridge" },
      { id: 37, title: "River Lea" },
      { id: 38, title: "Love In The Dark" },
      { id: 39, title: "Million Years Ago" },
      { id: 40, title: "All I Ask" }
    ].map(item => {
      return (
        <li className='collection-item grey'
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
        <h1 className = "title">Top 50</h1>
        <div className="ccover" /><br />
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

export default withRouter (Charts);
