import React from 'react';
import "./Col.css";

const Col = (props) => (
  <div className={"col-hover col s12 m" + props.count}>
    <div className="p-5">
      <div className="position-relative">
        <img className="responsive-img" src={props.imgPath} alt="image1" />
        <span className="col-display-none">QUICK VIEW</span>
      </div>
      <div className="center-align primary-grey title-price-font-style">
        <div className="font-size-16 p-b-5">
          {props.title}
        </div>
        <div className="font-size-16">
          from ${props.price.toFixed(2)}
        </div>
      </div>
    </div>

  </div>
)
export default Col;
