import React from 'react';
import "./Parallax.scss";
import imgPath from './sample-screen-pic.jpg';
const Parallax = () => (
  <div className="parallax-container">
      <div className="parallax"><img className="responsive-img" src={imgPath} alt="img1"/></div>
  </div>
)
export default Parallax;
