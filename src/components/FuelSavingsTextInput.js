import React from 'react';
import PropTypes from 'prop-types';

const FuelSavingsTextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

const textInputStyle = {
    'fontSize': '16px'
  };

  return (
    <input
      className="form-control"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
      style={textInputStyle} />
  );
};

FuelSavingsTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default FuelSavingsTextInput;
