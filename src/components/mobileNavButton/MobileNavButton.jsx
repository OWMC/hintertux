'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './mobileNavButton.module.css';

const toggleClass = () => {
  var element = document.getElementById("primary-nav-list");
  element.classList.toggle("visible");
};

const MobileNavButton = () => { 
  return (
    <>
        <Button id="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false" onClick={toggleClass} label="MENU" size="small" />
    </>
  )
};

MobileNavButton.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
)};

export default MobileNavButton;
