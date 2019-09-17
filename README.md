# Pokedex - Automation (e2e, visual, api and load testing)

This is an automation project example for Pokedex website which includes:
  * end-to-end ([webdriverIO](https://webdriver.io/) + [Jasmine](https://jasmine.github.io/) + [SpecReporter](https://www.npmjs.com/package/@wdio/spec-reporter)); 
  * visual regression testing ([wdio-image-comparison-service](https://github.com/wswebcreation/webdriver-image-comparison));
  * api testing ([POSTman](https://www.getpostman.com/) + [newman](https://www.npmjs.com/package/newman) + [newman-reporter-htmlextra](https://www.npmjs.com/package/newman-reporter-htmlextra)); 
  * load testing ([artillery.io](https://artillery.io/));

## Getting Started

### Prerequisites

You need the following dependencies installed globally to run all tests:
* nodeJS - v10.13.0
* artillery - version 1.6.0-28
* newman - version 4.5.4
* chromedriver - version 77.0.3865.40

### Run tests

First, clone the repository:

```
git clone 
```

## Running the tests

### How to run end-to-end and visual tests:

Open terminal and go to "<your_directory>/pokedex" and run the following commands to start budget application:

```
npm run e2e-visual
```

### How to run api testing:

```
npm run api
```

### How to run load testing

```
npm run load
```
ps: if you to run all tests at once, just run `npm run test`.
