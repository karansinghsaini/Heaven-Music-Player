import React, { Component } from 'react';
import '../style.css';
import StickyFooter from 'react-sticky-footer';
import play from '../icons/play.png';
import loop from '../icons/loop.png';
import prev from '../icons/prev.png';
import volume from '../icons/volume.png';
import next from '../icons/next.png';
import stop from '../icons/stop.png';


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
           <img src={prev} onClick={() => this.handlePrev()} alt='prev'/>
           <img src={play} onClick={() => this.handlePlay()} alt='play'/>
           <img src={next} onClick={() => this.handlenext()} alt='next'/>
           <img src={stop} onClick={() => this.handleStop()} alt='stop'/>
           <img src={volume} onClick={() => this.handleVolume()} alt='volume'/>
           <img src={loop} onClick={() => this.hnadleLoop()} alt='loop'/>
           </StickyFooter>
        )
    }
}

export default Bottomplayer;