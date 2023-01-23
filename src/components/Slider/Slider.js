import React from "react"

import "./Slider.css"

import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

import img4 from '../../assets/images/SlideFoto/4.jpg';
import img9 from '../../assets/images/SlideFoto/9.jpg';
import img20 from '../../assets/images/SlideFoto/20.jpg';
import img27 from '../../assets/images/SlideFoto/27.jpg';


export const Slider = () =>{
    return (
      <div className="slide-container">

        <Fade>
          <div className="each-fade">
            <img src={img4} height="600"/>
          </div>
          <div className="each-fade">
            <img src={img9} height="600"/>
          </div>
          <div className="each-fade">
            <img src={img20} height="600"/>
          </div>
          <div className="each-fade">
            <img src={img27} height="600"/>
          </div>
        </Fade>
      </div>
    );
  }

