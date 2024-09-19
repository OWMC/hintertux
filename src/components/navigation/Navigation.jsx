import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './navigation.css';

const toggleClass = () => {
  var element = document.getElementById("primary-nav-list");
  element.classList.toggle("visible");
};

const Navigation = ({navLinks}) => { 
  console.log("NAVLINKS: ", navLinks.map((navLink) => navLink));
  return (
  <>
    <Button id="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false" onClick={toggleClass} label="MENU" size="small" />
    <nav id="primary-navigation" className="primary-navigation" role="navigation">
      <ul id="primary-nav-list" className="primary-nav-list">
        { navLinks.map((navLink, idx) => 
          <li className="primary-nav-list-item" key={idx}>
            <a href={navLink.url} className="primary-nav-list-item-link">{navLink.title}</a>
          </li>
        ) }
      </ul>
    </nav>
  </>
)};

Navigation.propTypes = {
  navlinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
)};

Navigation.defaultProps = {
  navLinks: [
    {url: "*", title: "ringo"},
    {url: "*", title: "les"},
  ],
};

export default Navigation;
