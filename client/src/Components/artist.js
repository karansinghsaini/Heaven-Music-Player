/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './style.css';
import {Link} from 'react-router-dom';
import lp from '../images/artist/lp.jpg';
import adele from '../images/artist/adele.jpg'; 
import eminem from '../images/artist/eminem.jpg';
import dragons from '../images/artist/dragons.jpg';

class ArtistTile extends React.Component {

  render(){
    return (
      
      <MDBContainer>
      <MDBRow>
          <MDBCol >
            <MDBView hover zoom>
            <Link to='/players/lp'>
              <img
                src={lp}
                className="img-fluid"
                alt="Linkin Park" 
              />
              <MDBMask className="flex-center">
                <p className="text">Linkin Park</p>
              </MDBMask>
              </Link>
            </MDBView>
          </MDBCol>
          <MDBCol>  
            <MDBView hover zoom>
            <Link to='/players/eminem'>
              <img
                src={eminem}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">EMINEM</p>
              </MDBMask>
              </Link>
                   </MDBView>
                 </MDBCol>
                </MDBRow>
     <MDBRow >
       <MDBCol>
         <MDBView hover zoom>
         <Link to='/players/dragons'>
              <img
                src={dragons}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Imagine Dragons</p>
         </MDBMask>
         </Link>
      </MDBView>
    </MDBCol>        
      <MDBCol>
         <MDBView hover zoom>
         <Link to='/players/adele'>
              <img
                src={adele}
                className="img-fluid"
                alt=""
              />
         <MDBMask className="flex-center">
                <p className="white-text">Adele</p>
         </MDBMask>
         </Link>
        </MDBView>
     </MDBCol>
    </MDBRow>
      </MDBContainer>
      
    )}
    
  }

export default ArtistTile;
