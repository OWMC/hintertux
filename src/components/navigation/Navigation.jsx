import React from 'react';
import PropTypes from 'prop-types';
import MobileNavButton from '../mobileNavButton/MobileNavButton';
import './navigation.css';

const toggleClass = () => {
  var element = document.getElementById("primary-nav-list");
  element.classList.toggle("visible");
};

const Navigation = ({ navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
] }) => { 
  // console.log("NAVLINKS: ", navLinks.map((navLink, id) => navLink));
  return (
  <>
    <MobileNavButton />
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
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
)};

export default Navigation;
