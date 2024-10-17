/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Configure your project', 'Colours', 'Typography', 'Components', ['Button','Navigation', 'Header',  'Pages'], '*', 'WIP'],
      },
    },
        backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#141414' },
        { name: 'Light', value: '#fff' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Light',
    },

  },
};

export default preview;
