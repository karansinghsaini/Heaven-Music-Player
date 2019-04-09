import React from 'react';
import { Slide } from 'react-slideshow-image';
import {withRouter} from 'react-router-dom';
import Player from './video';
import Musicplayer from './audioplayer';
import '../App.css';
import bg1 from '../images/1.jpg';
import bg2 from '../images/2.jpg';
import bg3 from '../images/3.jpg';


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
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${bg2})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${bg3})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
      <h3 className = "header">Trending Video</h3>
      <Player />
      <h3 className = "header">Listen To Songs</h3>
      <Musicplayer />
      </div>
    )
}


export default withRouter (Slideshow);
