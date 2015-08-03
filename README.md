# konst.js [![npm Version](http://img.shields.io/npm/v/konst.svg?style=flat)](https://www.npmjs.org/package/konst) [![Build Status](https://img.shields.io/travis/yuanqing/konst.svg?style=flat)](https://travis-ci.org/yuanqing/konst) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/konst.svg?style=flat)](https://coveralls.io/r/yuanqing/konst)

> Just like React&rsquo;s [`keyMirror`](https://github.com/STRML/keyMirror) module, but takes an array as input instead.

## Usage

```js
'use strict';

var konst = require('konst');

konst(['FOO', 'BAR', 'BAZ']);
//=> {
//     FOO: 'FOO',
//     BAR: 'BAR',
//     BAZ: 'BAZ'
//   }
```

## API

```js
var konst = require('konst');
```

### konst(constants)

Returns an object where each key equals its value. Uses values from the given `constants` array.

## Installation

Install via [npm](https://npmjs.com/):

```
$ npm i --save konst
```

## Changelog

- 0.1.0
  - Initial release

## License

[MIT](LICENSE.md)
