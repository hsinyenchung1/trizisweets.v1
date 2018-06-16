import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import './RenderCake.css';
import imgPath from './sample-screen-pic.png';
import Row from './Row/Row';
import Col from './Col/Col';

class RenderCake extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // get render col html
    const col = this.props.imageObj.map((image, key) => {
      return <Col imgPath={image.path} title={image.title} price={image.price} modalId={this.props.modalId} key={key} count={this.props.colCount}/>
    });

    // get render row html by 3 col only
    let renderRow = [];
    let temp = [];
    for (let index = 0; index < col.length; index++) {
      if(index !== 0 && index % this.props.rowCount === 0){
        renderRow.push( <Row key={index}> {temp} </Row>);
        temp = [col[index]];
      }else{
        temp.push(col[index]);
      }
    }
    
    renderRow.push( <Row key={col.length}> {temp} </Row>);

    return (
      <div>
        {renderRow}
      </div>
    )
  }
}


export default RenderCake;