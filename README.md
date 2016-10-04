# npm-common-package-stencil
This is a stencils for common package.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/npm-common-package-stencil.svg)](https://npmjs.org/package/npm-common-package-stencil)
[![NPM Downloads](https://img.shields.io/npm/dm/npm-common-package-stencil.svg)](https://npmjs.org/package/npm-common-package-stencil)
[![Build Status](https://travis-ci.org/xqstencils/npm-common-package-stencil.svg?branch=master)](https://travis-ci.org/xqstencils/npm-common-package-stencil)

[![NPM](https://nodei.co/npm/npm-common-package-stencil.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/npm-common-package-stencil/)

## Features:

* Include CI Script to run the test and publish your package.
* Support ES6 syntax
* Support ESlint to check the code.
* Support Mocha to test your code.

## Development:

### Setup

Copy this stencil and replace `npm-common-package-stencil` with your package name.

### Linting

```
$ npm run lint
```

### Testing

```
$ npm run test
# or run the test in watch mode
$ npm run test:watch
```

### Compile code

```
$ npm run babel
# or run babel in watch mode
$ npm run babel:watch
```

### Generate distribution code

```
$ npm run build
```

### Setup CI

* Update the travis-ci config travis.yml
* Setup the ci into travis-ci.


### Publish your package

```
$ npm run release
```
