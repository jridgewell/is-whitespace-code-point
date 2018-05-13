'use strict'

module.exports = isWhitespaceCodePoint;

/**
 * Checks if the given Code Point (See String.prototype.charCodeAt) is
 * whitespace.
 *
 * Semantically equivalent to /\s/, but much faster.
 *
 * @param {number} code
 * @return {boolean}
 */
function isWhitespaceCodePoint(code) {
  if (code === 0x20 /* " " */) {
    return true;
  }

  // Uncommon, but we need to check this before the general ASCII check.
  if (code === 0xA0) {
    return true;
  }

  // All of ASCII, except for the lower control chars, fall in this range
  if (code > 0x0D && code < 0x1680) {
    return false;
  }

  // All the others...
  return (code <= 0x0D && code >= 0x09) ||
    code === 0x1680 ||
    (code <= 0x200A  && code >= 0x2000) ||
    code === 0x2028 ||
    code === 0x2029 ||
    code === 0x202F ||
    code === 0x205F ||
    code === 0x3000 ||
    code === 0xFEFF;
}
