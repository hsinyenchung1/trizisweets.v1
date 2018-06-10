import React, { Component } from 'react';
import RenderCake from "../RenderCake/RenderCake";
import './SignatureCake.css';
import imgPath from './sample-screen-pic.png';

class SignatureCake extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageObj: [
        {
          path: imgPath,
          title: "Fresh Floral + Brushed Gold",
          price: 100
        },
        {
          path: imgPath,
          title: "Marble",
          price: 105.00
        },
        {
          path: imgPath,
          title: "Succulent Crescent",
          price: 100.00
        }
      ],
      colCount: 4,
      rowCount: 3
    };
  }

  render() {

    return (
      <div>
        <RenderCake {...this.state}/>
      </div>
    )
  }
}


export default SignatureCake;