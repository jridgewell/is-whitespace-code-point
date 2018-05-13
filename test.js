'use strict'

var assert = require('assert');
var isWhitespace = require('./');
var Benchmark = require('benchmark');

function regexWhitespace(char) {
  // Special case for U+180E, which was declassified as whitespace
  return /\s/.test(char) && char !== '\u180E';
}

var chars = '';
for (var i = 0; i < 0x10000; i++) {
  var char = String.fromCharCode(i);
  chars += char;

  assert.equal(
    isWhitespace(char.charCodeAt(0)),
    regexWhitespace(char),
    'code point (' + i.toString(16) + '), expected ' + regexWhitespace(char)
  );
}

var suite = new Benchmark.Suite;

// Remove special case for U+180E char,
// I want pure speed.
regexWhitespace = function regexWhitespace(char) {
  return /\s/.test(char);
}

// add tests
suite.add('isWhitespaceCodePoint', function() {
  for (var i = 0; i < chars.length; i++) {
    isWhitespace(chars.charCodeAt(i));
  }
});

suite.add('regex (index access)', function() {
  for (var i = 0; i < chars.length; i++) {
    regexWhitespace(chars[i]);
  }
});

suite.add('regex (charAt access)', function() {
  for (var i = 0; i < chars.length; i++) {
    regexWhitespace(chars.charAt(i));
  }
});

// add listeners
suite.on('cycle', function(event) {
  console.log(String(event.target));
});

suite.on('complete', function() {
  var fastest = String(this.filter('fastest').map('name'));
  console.log('Fastest is ' + fastest);
  assert.equal(fastest, 'isWhitespaceCodePoint');
});

// run sync
suite.run({ 'async': false });
