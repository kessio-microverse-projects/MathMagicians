import React from 'react';
import propTypes from 'prop-types';

function DisplayValues(props) {
  const { total, operation, next } = props;
  return (
    <div>
      {total}
      {operation}
      {next}
    </div>
  );
}

export default DisplayValues;

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
