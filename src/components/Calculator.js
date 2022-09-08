import DisplayValues from './DisplayValues';
import calculate from '../logic/calculate'; /* eslint-disable */
import { useState } from 'react';

import React from 'react'

const Calculator = () => {

  const [obj, setCalculations] = useState({total: null, next: null, operation: null});
     
  clickOperations = (event) => {
    setCalculations(calculate(obj, event.target.value))
  }
  
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
  )
}

export default Calculator