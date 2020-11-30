# react-monorepo-starter-es6

- quickstart example for react monorepo

## overview

- packaging-structure

  - package-a: simple utils
  - packages
    - sample-app: simple react app
    - sample-components: simple react components

- all dependencies are hoisted to top-level `node_modules` using npm workspaces(require npm 7+)
  - put all your deps of dev/build/test/... in one place

- components lib is compiled with babel
- react app is compiled with webpack and babel-loader
- test with jest
- hot reloading with react-refresh-webpack-plugin

## demo

- requirements
  - npm 7.0.0+

``` shell
npm install --legacy-peer-deps
npm start
```

- open in your browser http://localhost:8999/

## note

- The `main` field of all `package.json`s points to `src` for easier development
  - `import`s in jest testing use `main`
  - `import`s in vscode ide use `main` for code jumping
  - `import`s in webpack use `module`
- If you want to publish a package, it's better to point `main` to `dist` in the package.json

## todo

- css url
  - image url

- storybook(too many breaking changes recently, not planned until stable)
  - support component story format
  - support mdx docs
