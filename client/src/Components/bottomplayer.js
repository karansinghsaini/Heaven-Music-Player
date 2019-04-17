import React, { Component } from 'react';
import '../style.css';
import StickyFooter from 'react-sticky-footer';
import play from '../icons/play.png';
import pause from '../icons/pause.png';
import loop from '../icons/loop.png';
import prev from '../icons/prev.png';
import volume from '../icons/volume.png';
import mute from '../icons/mute.png';
import next from '../icons/next.png';
import stop from '../icons/stop.png';
import noBodyCanSaveMeNow from "../LP/1.mp3";
import goodBye from "../LP/2.mp3";
import ttm from "../LP/3.mp3";
import bs from "../LP/4.mp3";
import invisible from "../LP/5.mp3";

class Bottomplayer extends Component{

  handlePrev = () => {
    console.log('Previous song');
  }

  handlePlay = () => {
    console.log('playing song');
  }

  handleStop = () => {
    console.log('Stopping song');
  }

  handleVolume = () => {
    console.log('Volume control');
  }

  handlenext = () => {
    console.log('next song');
  }

  hnadleLoop = () => {
    console.log('Loop On');
  }

    render(){        
        return (
          <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            height: "80px",
          backgroundColor: "#999999",
          padding: "2rem"
          }}
          stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          height: "75px",
          padding: "2rem"
          }}
          >
           <img src={prev} onClick={() => this.handlePrev()}/>
           <img src={play} onClick={() => this.handlePlay()}/>
           <img src={next} onClick={() => this.handlenext()}/>
           <img src={stop} onClick={() => this.handleStop()}/>
           <img src={volume} onClick={() => this.handleVolume()}/>
           <img src={loop} onClick={() => this.hnadleLoop()}/>
           </StickyFooter>
        )
    }
}

export default Bottomplayer;