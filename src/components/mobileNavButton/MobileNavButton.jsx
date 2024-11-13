'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './mobileNavButton.css';

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

export default MobileNavButton;
