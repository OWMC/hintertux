/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Configure your project', 'Colours', 'Typography', 'Components', ['Button','Navigation', 'Header',  'Pages'], '*', 'WIP'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
