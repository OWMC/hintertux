import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Navigation from '../navigation/Navigation';
import './header.css';
import svgIcon from '../../static/logos/owmc-logo.svg';

const Header = ({ logoLink = null, login = false, user = null, onLogin, onLogout, onCreateAccount, showPrimaryNav = true }) => (
  <header>
    <div className="storybook-header">
      { logoLink ? (
        <a href={logoLink.url} title={logoLink.title} className="logoLink">
          <img src={ window.next ? svgIcon.src : svgIcon} alt="OWMC logo" className="logo" />
        </a>
      ) : (
        <img src={ window.next ? svgIcon.src : svgIcon} alt="OWMC logo" className="logo" />
      ) }
      <div className="loginAndNav">
        {(showPrimaryNav !== false) && 
          <Navigation />
        }
        {(login !== false) &&
          <nav className="loginNav">
            {user ? (
              <>
                <div className="welcome">
                  Welcome, <b>{user.name}</b>!
                </div>
                <Button size="small" onClick={onLogout} label="Log out" />
              </>
            ) : (
              <>
                <Button size="small" onClick={onLogin} label="Log in" />
                <Button size="small" onClick={onCreateAccount} label="Sign up" />
              </>
            )}
          </nav>
        }
      </div>
    </div>
  </header>
);

Header.propTypes = {
  logoLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  showPrimaryNav: PropTypes.bool,
  login: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

export default Header;
