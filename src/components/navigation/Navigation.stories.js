import Navigation from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  args: {
    navLinks: [ ...Navigation.defaultProps.navLinks ],
  },
};

export const SimpleStory = {};
