import React from 'react';
import { Slide } from 'react-slideshow-image';
import {withRouter} from 'react-router-dom';
import Player from './video';
import '../App.css';
import bg1 from '../images/1.jpg';
import bg2 from '../images/2.jpg';
import bg3 from '../images/33.jpg';


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <div>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${bg1})`}}>
            <span>WELCOME TO HEAVEN MUSIC</span><br/>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${bg2})`}}>
            <span>STREAM LATEST MUSIC</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${bg3})`}}>
            <span>DISCOVER MUSIC</span>
          </div>
        </div>
      </Slide>
      <h3 className = "header">Trending Video</h3>
      <Player />
      <h3 className = "header">Listen To Songs</h3>

      </div>
    )
}


export default withRouter (Slideshow);
