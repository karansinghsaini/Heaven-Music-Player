import React from 'react';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  render () {
    return (
    	<div className='player-wrapper'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=RgKAFK5djSk'
          className='react-player'
          playing
          width='1000px'
          height='600px'
        />
      </div>
    )
  }
}

export default Player;
