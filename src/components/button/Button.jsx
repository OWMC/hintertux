import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
// import '../../utilities/colourclasses.scss';

/**
 * Primary UI component for user interaction
 */
const Button = ({ backgroundColor, size = "medium",  minWidth = false, label, href = "", newTab, ...props }) => {
  const minimumwidth = minWidth ? 'storybook-button--minwidth' : 'no';
  return (href ? 
  <a 
    className={['storybook-button', `storybook-button--${size}`, minimumwidth].join(' ')} 
    href={href}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noreferrer" : undefined}
  >
    {label}
  </a> :
  <button
    type="button"
    className={['storybook-button', `storybook-button--${size}`, minimumwidth].join(' ')}
    {...props}
  >
    {label}
  </button>);
};

Button.propTypes = {
  href: PropTypes.string,
  newTab: PropTypes.bool,
  minWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired
};

export default Button;
