![Hintertux mountains](./src/static/images/hintertux-light.webp)

# HINTERTUX

Component library and design system documentation. Built to serve OWMC's frontend needs.

From scratch React project using Storybook. It uses CSS from the owmc.co.uk WP site (2018-2024).


## Available Scripts

In the project directory, you can run:

### `storybook`

Runs the Storybook in the development mode.\

The page will reload when you make changes.

### `build-storybook`

Builds the Storybook for production to the `storybook-static` folder.\

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `build-distro`

Builds the comoponent library to the `distro` folder. The build transpiles the components' JSX and copies CSS and other assets. These can then be imported by other React apps.

## Planned works

Colours and typography MDX files have not been added yet. Sass issue.

When sass is working we'll use an import to get the fonts from src/fonts/stylesheet.scss in each component. The path for viewing the component in storybook will be different when the component is to be used in a project. So we can maybe set a variable for the path which checks for storybook and amends the value as necessary.

Review sass, prettier, and storybook-esling to make sure they serve a purpose well.

Later we'll be working with Tailwind and shadcn/ui.