import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class DisplayValues extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <div>
        {total}
        {operation}
        {next}
      </div>
    );
  }
}
DisplayValues.propTypes = {
  total: propTypes.number,
  operation: propTypes.string,
  next: propTypes.string,
};
DisplayValues.defaultProps = {
  total: 0,
  operation: '',
  next: '',
};
