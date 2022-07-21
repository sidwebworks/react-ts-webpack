# React + Typescript
> Setup from scratch using webpack and babel


## Dev Dependencies

- Standlone Packages
  - webpack: Core library for Webpack
  - webpack-cli: Command line interface for Webpack
  - webpack-dev-server: development server for webpack allows things like Hot module replacement on changes.
  - webpack-merge: Utility for merging different webpack configurations and modifying them.
  - @babel/cli: Command line interface for babel js
  - @babel/core: Core library for babel
  - @babel/runtime: A collection of runtime helper functions used by babel for transpiling code.

- Babel Presets
  > A babel preset is a package containing a set of configuration options and plugins for a particular use case.
  - @babel/preset-env: Enables the output code to support older environments.
  - @babel/preset-react: Enables processing of JSX syntax to simpler function calls like `React.createElement`.
  - @babel/preset-typescript: Enables processing of typescript syntax to regular javascript.

- Babel plugins
  - @babel/plugin-transform-runtime: Transforms any inline references to `@babel/runtime` helpers with require/import statements.

- Webpack plugins
  - html-webpack-plugin: Creates an `index.html` in the final build directory based on a given `template.html` file.
  - terser-webpack-plugin: Minifies and compresses the output code using Terser, replaces any inline comments and much more.

- Webpack loaders
  - babel-loader: Allows preprocessing of source files using babel.
  - css-loader: Allows pre processing of `.css` files
