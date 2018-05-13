# is-whitespace-code-point [![Build Status][travis-badge]][travis]

Checks if a given code point (ie, the return value from
[String.p.charCodeAt][charCodeAt]) is whitespace. Semantically
equivalent to `/\s/`, but considerably faster.

## Installation

```bash
npm install is-whitespace-code-point
```

## Usage

```javascript
var isWhitespace = require('is-whitespace-code-point')

isWhitespace(' '.charCodeAt(0)) // => true
isWhitespace(0x20) // => true
isWhitespace(32) // => true
isWhitespace('\n'.charCodeAt(0)) // => true
isWhitespace(0x0A) // => true
isWhitespace(10) // => true

isWhitespace('a'.charCodeAt(0)) // => false
isWhitespace(0x61) // => false
isWhitespace(97) // => false
```

## License

MIT

[travis-badge]: https://img.shields.io/travis/jridgewell/is-whitespace-code-point.svg
[travis]: https://travis-ci.org/jridgewell/is-whitespace-code-point
[charCodeAt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
