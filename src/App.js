/* eslint-disable react/display-name  */
import React, { Component } from 'react';
import Calculator from './components/Calculator';

export default class extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}
