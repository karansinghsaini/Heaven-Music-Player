import React  from 'react';
import {Link} from 'react-router-dom';
import Bottomplayer from './bottomplayer';
import '../App.css';
import lp from '../images/artist/lp.jpg';
import eminem from '../images/artist/eminem.jpg';
import skrillex from '../images/artist/skrillex.png';

const ArtistTile = () => {

    return(
      <div>
        <div className = 'divartist'>
          <div className = 'lpCard'>
            <Link to='/Person'>
              <img className='artistimg' src={lp} alt = 'Linkin Park' />
                <p className='nameartist'>LINKIN PARK</p>
            </Link>
          </div>
          <div className = 'eminemCard'>
            <Link to='/Person'>
              <img className='artistimg' src={eminem} alt = 'Eminem' />
                <p className='nameartist'>EMINEM</p>
            </Link>
          </div>
          <div className = 'skCard'>
            <Link to='/Person'>
              <img className='artistimg' src={skrillex} alt = 'Skrillex' />
                <p className='nameartist'>SKRILLEX</p>
            </Link>
          </div>
        </div>
        <Bottomplayer />
        </div>
    )}

export default ArtistTile;
