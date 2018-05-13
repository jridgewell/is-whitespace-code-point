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
  // The ASCII whitespace chars.
  if (
    code === 0x20 ||
    code === 0xA0 ||
    code === 0x09 ||
    code === 0x0A ||
    code === 0x0B ||
    code === 0x0C ||
    code === 0x0D
  ) {
    return true;
  }

  // All of ASCII, falls in this range
  if (code < 0x1680) {
    return false;
  }

  // All the others...
  return code === 0x1680 ||
    code === 0x2000 ||
    code === 0x2001 ||
    code === 0x2002 ||
    code === 0x2003 ||
    code === 0x2004 ||
    code === 0x2005 ||
    code === 0x2006 ||
    code === 0x2007 ||
    code === 0x2008 ||
    code === 0x2009 ||
    code === 0x200A ||
    code === 0x2028 ||
    code === 0x2029 ||
    code === 0x202F ||
    code === 0x205F ||
    code === 0x3000 ||
    code === 0xFEFF;
}
