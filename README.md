# Pokedex - Automation (e2e, visual, api and load testing)

This is an automation project example for Pokedex website which includes:
  * end-to-end ([webdriverIO](https://webdriver.io/) + Jasmine + SpecReporter); 
  * visual regression testing (wdio-image-comparison-service);
  * api testing (POSTman + newman + newman-reporter-htmlextra); 
  * load testing (artillery.io);

## Getting Started

### Prerequisites

You need the following dependencies installed globally to run all tests:
* nodeJS - v10.13.0
* artillery - version 1.6.0-28
* newman - version 4.5.4

### Run tests

Clone the repository:

```
git clone 
```

## Running the tests

### How to run end-to-end and visual tests:

Open terminal and go to "<your_directory>/pokedex/test/" and run the following commands to start budget application:

```
npm i
npm e2e-visual
```

### How to run api testing:

```
npm api
```

### How to run load testing

```
npm load
```

