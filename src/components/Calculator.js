import React, { Component } from 'react';
import DisplayValues from './DisplayValues';
import calculate from '../logic/Calculate';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: '',
      next: '',
    };
  }

  clickOperations = (event) => {
    this.setState((obj) => calculate(obj, event.target.value));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div>
        <div className="appCalculator">
          <div className="grid-container">
            <div className="screen-input">
              <span className="text-display">
                <DisplayValues total={total} operation={operation} next={next} />
              </span>
            </div>
          </div>
          <div className="grid-container">
            <input type="button" onClick={this.clickOperations} value="AC" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="+/-" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="%" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="÷" className="same-size-btn orange" />
          </div>
          <div className="grid-container">
            <input type="button" onClick={this.clickOperations} value="7" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="8" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="9" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} className="same-size-btn orange" value="x" />
          </div>
          <div className="grid-container">
            <input type="button" onClick={this.clickOperations} value="4" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="5" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="6" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="-" className="same-size-btn orange" />
          </div>
          <div className="grid-container">
            <input type="button" onClick={this.clickOperations} value="1" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="2" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="3" className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="+" className="same-size-btn orange" />
          </div>
          <div className="grid-container">
            <input type="button" onClick={this.clickOperations} className="zero" value="0" />
            <input type="button" onClick={this.clickOperations} value="." className="same-size-btn" />
            <input type="button" onClick={this.clickOperations} value="=" className="same-size-btn orange" />
          </div>
        </div>
      </div>
    );
  }
}
