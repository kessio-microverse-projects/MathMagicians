import React, { useState } from 'react';
import DisplayValues from './DisplayValues';
import calculate from '../logic/Calculate'; /* eslint-disable-line */
import '../styles/calculator.css';

const Calculator = () => {
  const [obj, setCalculations] = useState({ total: null, next: null, operation: null });

  const clickOperations = (event) => {
    setCalculations(calculate(obj, event.target.value));
  };

  return (
    <div>
      <div className="sectiontitle">Let us do some Maths</div>
      <div className="appCalculator">
        <div className="grid-container">
          <div className="screen-input">
            <span className="text-display">
              <DisplayValues total={obj.total} operation={obj.operation} next={obj.next} />
            </span>
          </div>
        </div>
        <div className="grid-container">
          <input type="button" data-testid="ac" onClick={clickOperations} value="AC" className="same-size-btn" />
          <input type="button" data-testid="plus" onClick={clickOperations} value="+/-" className="same-size-btn" />
          <input type="button" data-testid="percent" onClick={clickOperations} value="%" className="same-size-btn" />
          <input type="button" data-testid="divide" onClick={clickOperations} value="÷" className="same-size-btn orange" />
        </div>
        <div className="grid-container">
          <input type="button" data-testid="seven" onClick={clickOperations} value="7" className="same-size-btn" />
          <input type="button" data-testid="eight" onClick={clickOperations} value="8" className="same-size-btn" />
          <input type="button" data-testid="nine" onClick={clickOperations} value="9" className="same-size-btn" />
          <input type="button" data-testid="multiply" onClick={clickOperations} className="same-size-btn orange" value="x" />
        </div>
        <div className="grid-container">
          <input type="button" data-testid="four" onClick={clickOperations} value="4" className="same-size-btn" />
          <input type="button" data-testid="five" onClick={clickOperations} value="5" className="same-size-btn" />
          <input type="button" data-testid="six" onClick={clickOperations} value="6" className="same-size-btn" />
          <input type="button" data-testid="minus" onClick={clickOperations} value="-" className="same-size-btn orange" />
        </div>
        <div className="grid-container">
          <input type="button" data-testid="one" onClick={clickOperations} value="1" className="same-size-btn" />
          <input type="button" data-testid="two" onClick={clickOperations} value="2" className="same-size-btn" />
          <input type="button" data-testid="three" onClick={clickOperations} value="3" className="same-size-btn" />
          <input type="button" data-testid="plus" onClick={clickOperations} value="+" className="same-size-btn orange" />
        </div>
        <div className="grid-container">
          <input type="button" data-testid="zero" onClick={clickOperations} className="zero" value="0" />
          <input type="button" data-testid="decimal" onClick={clickOperations} value="." className="same-size-btn" />
          <input type="button" data-testid="equals" onClick={clickOperations} value="=" className="same-size-btn orange" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
