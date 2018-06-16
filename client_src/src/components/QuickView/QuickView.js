import React, { Component } from 'react';
import './QuickView.css';

class QuickView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id={this.props.modalId} className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    )
  }
}


export default QuickView;