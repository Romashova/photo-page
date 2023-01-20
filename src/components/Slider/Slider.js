import React from "react"

import "./Slider.css"

import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';


const fadeImages = [
    "../../assets/images/SlideFoto/4.jpg",
    "../../assets/images/SlideFoto/9.jpg",
    "../../assets/images/SlideFoto/20.jpg"
  ];

export const Slider = () =>{
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <img src={fadeImages[0]} height="300"/>
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} height="300"/>
          </div>
          <div className="each-fade">
            <img src={fadeImages[2]} height="300"/>
          </div>
        </Fade>
      </div>
    );
  }

