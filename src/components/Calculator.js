import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="appCalculator">
          <div className="grid-container">
            <input type="text" className="screen-input" />
          </div>
          <div className="grid-container">
            <input type="button" value="AC" className="same-size-btn" />
            <input type="button" value="+/-" className="same-size-btn" />
            <input type="button" value="%" className="same-size-btn" />
            <input type="button" value="÷" className="same-size-btn orange" />
          </div>
          <div className="grid-container">
            <input type="button" value="7" className="same-size-btn" />
            <input type="button" value="8" className="same-size-btn" />
            <input type="button" value="9" className="same-size-btn" />
            <input type="button" className="same-size-btn orange" value="X" />
          </div>
          <div className="grid-container">
            <input type="button" value="4" className="same-size-btn" />
            <input type="button" value="5" className="same-size-btn" />
            <input type="button" value="6" className="same-size-btn" />
            <input type="button" value="-" className="same-size-btn orange" />
          </div>
          <div className="grid-container">
            <input type="button" value="1" className="same-size-btn" />
            <input type="button" value="2" className="same-size-btn" />
            <input type="button" value="3" className="same-size-btn" />
            <input type="button" value="+" className="same-size-btn orange" />
          </div>
          <div className="grid-container">
            <input type="button" className="zero" value="0" />
            <input type="button" value="." className="same-size-btn" />
            <input type="button" value="=" className="same-size-btn orange" />
          </div>

        </div>
      </div>
    );
  }
}
