# LittleZebra

![Project test for](https://github.com/jferracini/little-zb-test/blob/master/src/assets/lts-logo-dark.png "Little Zebra Foundation")

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Runtime

This is an old Angular 6 project and should be used with Node 10 and npm 6.

If you use `nvm`, run `nvm use` before installing dependencies.

## First steps (4 steps)

1. Open Terminal 

2. Clone project `$ git clone https://github.com/jferracini/little-zb-test`

3. Navigate to directory  `$ cd little-zb-test`

and

4. Run `$ npm install`

## Development server

Run `$ ng serve --open` (preferably in Google Chrome). 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

###### I was not worried about performing the unit test as it would take a bit of refactory.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Vercel deploy

Vercel's Git-based build currently runs on a modern Node version and is not compatible with this Angular 6 toolchain.

This repository includes a GitHub Actions workflow that builds with Node 10 and deploys the generated `dist/little-zebra` folder to Vercel using the CLI.

Required GitHub repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Important:

- Disable Vercel's automatic Git deployment for this repository, otherwise Vercel will keep trying to build the source code with Node 20+ and fail.
- Keep using the GitHub Actions workflow as the deployment path for production.


## This project was developed with

  ### Bootstrap 4

  ![Project test for](https://github.com/jferracini/little-zb-test/blob/master/src/assets/powered/Bootrap4.png "Bootstrap 4")

  ### Angular with Angular CLI 6.0.5

  ![Project test for](https://github.com/jferracini/little-zb-test/blob/master/src/assets/powered/angular.png "Angular")

  ### NodeJS with npm

  ![Project test for](https://github.com/jferracini/little-zb-test/blob/master/src/assets/powered/nodejs-new-pantone-black.png "Node")
