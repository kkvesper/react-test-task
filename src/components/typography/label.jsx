import React, { PropTypes } from 'react';

const Label = ({ children, htmlFor, className }) => (
  <label className={`typography label ${className}`} htmlFor={htmlFor}>{children}</label>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string
};

Label.defaultProps = {
  className: '',
  htmlFor: ''
};

export default Label;
