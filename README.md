# grouptodo
Group todo list app created as part of the Google Developer Scholarship 2017

## Contributing

* The `master` branch is protected, meaning *no pushes allowed*.
* To contribute, checkout a new branch of the form `your_initials/branch_name`,
  e.g. if I wanted to check out a branch for a code refactor I would call it
  `at/refactor`.
* When code is ready to be merged, make a pull request to master. Any
  contributor except the PR owner can approve the PR and merge it.



### Build

* To install necessary dependencies run
  ```bash
  npm install
  ```
  in the project root.
* To build the code run
  ```bash
  npm run build
  ```
  which will build the React JSX files with `webpack`. You can leave this
  running in the background to watch for new changes in `src/` and automatically
  rebuild `public/bundle.js` after changes are made.
* To view the page, start the local webserver with
  ```bash
  npm run start
  ```
  which will start a local webserver on port `3000`.
* View it by visiting `http://localhost:3000` in your browser.

### Development

To run webpack and web server during development run

```bash
npm run dev
```

The development environment will include Webpack [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) and [React Hot Loading](http://gaearon.github.io/react-hot-loader/getstarted/)