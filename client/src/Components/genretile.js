import React from 'react';
import {Link} from 'react-router-dom';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './style.css';
import pop from '../images/genre/pop.jpg';
import edm from '../images/genre/edm.jpg';
import rock from '../images/genre/rock.jpg';
import rap from '../images/genre/rap.jpg';

const GenreTile = () => {

    return(

      <MDBContainer>
      <MDBRow>
          <MDBCol >
            <MDBView hover zoom>
              <img
                src={pop}
                className="img-fluid"
                alt="POP"
              />
              <MDBMask className="flex-center">
                <p className="white-text">POP</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol>
            <MDBView hover zoom>
              <img
                src={edm}
                className="img-fluid"
                alt="EDM"
              />
              <MDBMask className="flex-center">
                <p className="white-text">EDM</p>
              </MDBMask>
                   </MDBView>
                 </MDBCol>
                </MDBRow>
     <MDBRow >
       <MDBCol>
         <MDBView hover zoom>
              <img
                src={rock}
                className="img-fluid"
                alt="rock"
              />
              <MDBMask className="flex-center">
                <p className="white-text">ROCK</p>
         </MDBMask>
      </MDBView>
    </MDBCol>
      <MDBCol>
         <MDBView hover zoom>
              <img
                src={rap}
                className="img-fluid"
                alt="rap"
              />
         <MDBMask className="flex-center">
                <p className="white-text">RAP</p>
         </MDBMask>
        </MDBView>
     </MDBCol>
    </MDBRow>
      </MDBContainer>
    )}

export default GenreTile;
