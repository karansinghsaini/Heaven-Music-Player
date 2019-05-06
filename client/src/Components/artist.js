import React  from 'react';
import {Link} from 'react-router-dom';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './style.css';
import lp from '../images/artist/lp.jpg';
import taylor from '../images/artist/taylor.jpg'; 
import eminem from '../images/artist/eminem.jpg';
import skrillex from '../images/artist/skrillex.png';

const ArtistTile = () => {
    return (
      
      <MDBContainer>
      <MDBRow>
          <MDBCol >
            <MDBView hover zoom>
              <img
                src={lp}
                className="img-fluid"
                alt="Linkin Park"
              />
              <MDBMask className="flex-center">
                <p className="text">Linkin Park</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol>  
            <MDBView hover zoom>
              <img
                src={eminem}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">EMINEM</p>
              </MDBMask>
                   </MDBView>
                 </MDBCol>
                </MDBRow>
     <MDBRow >
       <MDBCol>
         <MDBView hover zoom>
              <img
                src={skrillex}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">SKRILLEX</p>
         </MDBMask>
      </MDBView>
    </MDBCol>        
      <MDBCol>
         <MDBView hover zoom>
              <img
                src={taylor}
                className="img-fluid"
                alt=""
              />
         <MDBMask className="flex-center">
                <p className="white-text">Taylor Swift</p>
         </MDBMask>
        </MDBView>
     </MDBCol>
    </MDBRow>
      </MDBContainer>
      
    );
  }

export default ArtistTile;
