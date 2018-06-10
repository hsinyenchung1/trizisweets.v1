import React from 'react';
import "./Row.scss";

const Row = (props) => (
  <div className="row">
    {props.children}
  </div>
)
export default Row;
