import { fn } from '@storybook/test';
import { bool } from 'prop-types';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  ArgTypes: {
    showPrimaryNav: bool,
    login: bool,
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LogoLink = {
  args: {
    login: true,
    showPrimaryNav: true,
    logoLink: {
      url: '#',
      title: 'Title'
    }
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  }
};

export const LoggedIn = {
  args: {
    login: true,
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {
  args: {
    login: true,
  }
};

export const LoggedOutAndNav = {
  args: {
    login: true,
    showPrimaryNav: true,
  }
};

export const Nav = {
  args: {
    login: false,
    showPrimaryNav: true,
  }
};
