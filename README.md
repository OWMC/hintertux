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

### buildDistro

This runs several other sripts you can see in package.json. It creates a `distro` folder which contains the components in directories. Each component is a JS file and CSS file. Ready to be consumed.

## Planned works

Review sass, prettier, and storybook-esling to make sure they serve a purpose well.

Later we'll be working with Tailwind and shadcn/ui.